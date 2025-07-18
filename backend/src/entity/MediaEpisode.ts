import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MediaEpisode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaId!: number;

  @Column()
  userId!: number;

  @Column()
  season!: number;

  @Column()
  episode!: number;

  @Column()
  isWatched!: boolean;
}
// make unique together
