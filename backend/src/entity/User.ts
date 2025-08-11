import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { UserAuth } from './UserAuth.js';
import { Comment } from './Comment.js';
import { CommentVote } from './CommentVote.js';

@Entity({ schema: 'public' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @OneToOne(() => UserAuth, (userAuth) => userAuth.user, { cascade: true, eager: true })
  userAuth!: Relation<UserAuth>;

  @OneToMany(() => Comment, (c) => c.user)
  comments!: Relation<Array<Comment>>;

  @OneToMany(() => CommentVote, (cv) => cv.user)
  votes!: Relation<CommentVote[]>;
}
