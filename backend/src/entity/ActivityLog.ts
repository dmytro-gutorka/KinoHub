import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Column,
  Unique,
} from 'typeorm';
import { ActivityType, MediaType } from '../types/types.js';

@Unique(['userId', 'mediaId', 'mediaType', 'activityType'])
@Entity({ schema: 'public' })
export class ActivityLog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  mediaInfoId!: number;

  @Column()
  mediaId!: number;

  @Column()
  mediaType!: MediaType;

  @Column()
  activityType!: ActivityType;

  @Column({ type: 'double precision', nullable: true })
  valueNumeric!: number | null;

  @Column({ type: 'integer', nullable: true })
  commentId!: number | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
