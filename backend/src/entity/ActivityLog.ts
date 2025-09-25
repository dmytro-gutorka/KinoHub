import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Column,
} from 'typeorm';
import { MediaType } from '../types/types.js';

type ActionType = 'watch' | 'like' | 'rate' | 'comment'; // dislike ?

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
  actionType!: ActionType;

  @Column({ type: 'double precision', nullable: true })
  valueNumeric!: number | null;

  @Column({ type: 'integer', nullable: true })
  commentId!: number | null;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
