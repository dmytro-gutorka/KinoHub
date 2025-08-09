import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User.js';
import { MediaType } from '../types/types.js';
import { CommentVote } from './CommentVote.js';

@Entity({ name: 'comments', schema: 'public' })
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  review!: string;

  @Index()
  @Column()
  mediaId!: number;

  @Index()
  @Column()
  mediaType!: MediaType;

  @Column({ default: 0 })
  likesCount!: number;

  @Column({ default: 0 })
  dislikesCount!: number;

  @ManyToOne(() => User, (u: User): Comment[] => u.comments, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'userId' })
  user?: Relation<User> | null;

  @Column({ nullable: true })
  userId?: number | null;

  @ManyToOne(() => Comment, (c: Comment): Comment[] => c.children, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  @JoinColumn({ name: 'parentId' })
  parent!: Relation<Comment> | null;

  @Index()
  @Column({ nullable: true })
  parentId?: number | null;

  @OneToMany(() => Comment, (c: Comment): Comment | null => c.parent)
  children!: Relation<Comment[]>;

  @OneToMany(() => CommentVote, (cv: CommentVote): Comment => cv.comment, { eager: true })
  votes?: Relation<CommentVote[]> | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
