import {
  Relation,
  BaseEntity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Entity,
} from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
export class FriendBlacklist extends BaseEntity {
  @PrimaryColumn({ name: 'blocker_id' })
  blockerId!: number;

  @PrimaryColumn({ name: 'blocked_id' })
  blockedId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'blocker_id' })
  blocker!: Relation<User>;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'blocked_id' })
  blocked!: Relation<User>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
