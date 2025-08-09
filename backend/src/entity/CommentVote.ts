import { Comment } from './Comment.js';
import { User } from './User.js';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'comment_votes' })
@Unique(['userId', 'commentId'])
export class CommentVote {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'smallint' })
  vote!: 1 | 0 | -1;

  @ManyToOne(() => Comment, (c: Comment): CommentVote[] | null | undefined => c.votes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'commentId' })
  comment!: Comment;

  @Index()
  @Column()
  commentId!: number;

  @ManyToOne(() => User, (u: User): CommentVote[] => u.votes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User;

  @Column()
  userId!: number;
}
