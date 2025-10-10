import {
  Relation,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  Column,
  Entity,
  Index,
} from 'typeorm';
import { UserAuth } from './UserAuth.js';
import { Comment } from './Comment.js';
import { CommentVote } from './CommentVote.js';
import { UserProfile } from './UserProfile.js';
import { Expose } from 'class-transformer';
import { MediaUserAction } from './MediaUserAction.js';
import { Friendship } from './Friendship.js';

@Entity({ schema: 'public' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @Index()
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Expose()
  @Column({ select: false })
  passwordHash!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Comment, (c) => c.user)
  comments!: Relation<Array<Comment>>;

  @OneToMany(() => CommentVote, (cv) => cv.user)
  votes!: Relation<CommentVote[]>;

  @OneToOne(() => UserAuth, (userAuth) => userAuth.user, { cascade: true, eager: true })
  @JoinColumn()
  userAuth!: Relation<UserAuth>;

  @OneToMany(() => Friendship, (f) => f.friend)
  friends!: Relation<Friendship>;

  @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true, eager: true })
  @JoinColumn()
  profile!: Relation<UserProfile>;

  @OneToMany(() => MediaUserAction, (mua) => mua.user)
  userActions!: Relation<MediaUserAction[]>;
}
