import {
  Relation,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Column,
  Entity,
  Check,
} from 'typeorm';
import { User } from './User.js';

export type FriendRequestStatus = 'pending' | 'accepted' | 'rejected' | 'cancelled';

@Entity({ schema: 'public' })
@Check(`"status" IN ('pending', 'accepted', 'rejected', 'cancelled')`)
@Check(`"requester_id" <> "receiver_id"`)
export class FriendRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'pending' })
  status!: FriendRequestStatus;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'requester_id' })
  requester!: Relation<User>;

  @Column({ name: 'requester_id' })
  requesterId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'receiver_id' })
  receiver!: Relation<User>;

  @Column({ name: 'receiver_id' })
  receiverId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
