import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User.js';
import { MediaType } from '../types/types.js';

@Entity({ name: 'comments', schema: 'public' })
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  review!: string;

  @Column()
  mediaId!: number;

  @Column()
  mediaType!: MediaType;

  @Column({ default: 0 })
  likesCount!: number;

  @Column({ default: 0 })
  dislikesCount!: number;

  @ManyToOne(() => User, (u) => u.comments, { onDelete: 'SET NULL', nullable: true })
  user?: Relation<User>;

  @Column()
  userId!: number;

  @ManyToOne(() => Comment, (c) => c.children, { onDelete: 'CASCADE', nullable: true })
  parent?: Relation<Comment> | null;

  @Index()
  @Column({ nullable: true })
  parentId?: number | null;

  @OneToMany(() => Comment, (c) => c.parent)
  children!: Relation<Array<Comment>>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
