import {
  Relation,
  BaseEntity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Entity,
  Index,
  Check,
} from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
@Check(`"user_id" <> "friend_id"`)
@Index(['userId'])
export class Friendship extends BaseEntity {
  @PrimaryColumn({ name: 'user_id' })
  userId!: number;

  @PrimaryColumn({ name: 'friend_id' })
  friendId!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'user_id' })
  user!: Relation<User>;

  @ManyToOne(() => User, (u) => u.friends, { onDelete: 'CASCADE', nullable: false, eager: true })
  @JoinColumn({ name: 'friend_id' })
  friend!: Relation<User>;

  @CreateDateColumn()
  createdAt!: Date;
}
