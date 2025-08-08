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

@Entity({ name: 'comments', schema: 'public' })
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column({ nullable: true })
  parentId?: number | null;

  @Column()
  overview!: string;

  @Column({ default: 0 })
  likesCount!: number;

  @Column({ default: 0 })
  dislikesCount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => User, (u) => u.comments, { onDelete: 'SET NULL', nullable: true })
  author?: Relation<User>;

  @ManyToOne(() => Comment, (c) => c.children, { onDelete: 'CASCADE', nullable: true })
  parent?: Relation<Comment> | null;

  @OneToMany(() => Comment, (c) => c.parent)
  children!: Relation<Array<Comment>>;
}
