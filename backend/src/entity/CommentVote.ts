import { Comment } from './Comment.js';
import { User } from './User.js';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
} from 'typeorm';

@Entity({ schema: 'public' })
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
  comment!: Relation<Comment>;

  @Index()
  @Column()
  commentId!: number;

  @ManyToOne(() => User, (u: User): CommentVote[] => u.votes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: Relation<User>;

  @Column()
  userId!: number;
}
