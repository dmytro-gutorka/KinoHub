import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddWeeklyFunctions1758922481885 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE OR REPLACE FUNCTION public.week_bounds(p_tz text)
    RETURNS TABLE(week_start_utc timestamptz, week_end_utc timestamptz)
    LANGUAGE sql STABLE AS
$$
    SELECT
    (date_trunc('week', (now() AT TIME ZONE p_tz)) AT TIME ZONE p_tz) AS week_start_utc,
    ((date_trunc('week', (now() AT TIME ZONE p_tz)) + interval '7 days') AT TIME ZONE p_tz) AS week_end_utc;
$$;


CREATE OR REPLACE FUNCTION public.weekly_sessions(p_user_id int, p_tz text, p_media_type text)
    RETURNS TABLE(
    runtime int,
    user_id int,
    activity_type text,
    start_time_utc timestamptz)
    LANGUAGE sql STABLE AS $$

    WITH b AS (SELECT * FROM public.week_bounds(p_tz)),

    sessions AS (
    SELECT
        mi.runtime,
        a."userId",
        a."activityType",
        a."updatedAt" - ( mi.runtime * interval '1 minute') as start_time_utc
    
    FROM activity_log AS a
    JOIN media_info AS mi ON a."mediaInfoId" = mi.id
    WHERE a."userId" = p_user_id
    AND a."activityType" = 'watch'
    AND mi."mediaType" = p_media_type)

    SELECT s.*
    FROM sessions AS s
    CROSS JOIN b
    WHERE s.start_time_utc >= b.week_start_utc
    AND s.start_time_utc < b.week_end_utc
    $$;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP FUNCTION IF EXISTS public.week_bounds(p_tz text);`);
    await queryRunner.query(
      `DROP FUNCTION IF EXISTS public.weekly_sessions(p_user_id int, p_tz text, p_media_type text);`
    );
  }
}
