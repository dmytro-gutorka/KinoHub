import {
  Relation,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  Check,
} from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
@Check(`"status" IN ('pending', 'accepted', 'rejected', 'cancelled')`)
export class FriendBlacklist extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'blocker_id' })
  blockerId!: number;

  @PrimaryGeneratedColumn({ name: 'blocked_id' })
  blockedId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'requester_id' })
  blocker!: Relation<User>;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'blocked_id' })
  blocked!: Relation<User>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
