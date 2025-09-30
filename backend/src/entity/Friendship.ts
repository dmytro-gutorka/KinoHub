import {
  Relation,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  Check,
} from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
@Check(`"user_id" <> "friend_id"`)
export class Friendship extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId!: number;

  @PrimaryGeneratedColumn({ name: 'friend_id' })
  friendId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id' })
  user!: Relation<User>;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'friend_id' })
  friend!: Relation<User>;

  @CreateDateColumn()
  createdAt!: Date;
}
