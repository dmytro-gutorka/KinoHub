import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { UserAuth } from './UserAuth.js';
import { Comment } from './Comment.js';
import { CommentVote } from './CommentVote.js';

import { UserProfile } from './UserProfile.js';

@Entity({ schema: 'public' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @Index()
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => UserAuth, (userAuth) => userAuth.user, { cascade: true, eager: true })
  userAuth!: Relation<UserAuth>;

  @OneToMany(() => Comment, (c) => c.user)
  comments!: Relation<Array<Comment>>;

  @OneToMany(() => CommentVote, (cv) => cv.user)
  votes!: Relation<CommentVote[]>;

  @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true, eager: true })
  @JoinColumn()
  profile!: Relation<UserProfile>;
}
