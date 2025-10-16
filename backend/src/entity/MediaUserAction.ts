import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { WatchStatus } from '../types/types.js';
import { MediaInfo } from './MediaInfo.js';
import { User } from './User.js';

@Entity({ schema: 'public' })
@Unique(['mediaId', 'userId', 'mediaType'])
export class MediaUserAction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaId!: number;

  @Column({ default: false })
  isLiked!: boolean;

  @Column({ default: false })
  isWatched!: boolean;

  @Column({ default: null, nullable: true, type: 'double precision' })
  rating!: number | null;

  @Column({ default: null, nullable: true, type: 'enum', enum: WatchStatus })
  watchStatus!: WatchStatus | null;

  @Column()
  mediaType!: 'tv' | 'movie';

  @Column()
  userId!: number;

  @ManyToOne(() => User, (u) => u.userActions)
  user!: Relation<User>;

  @Column()
  mediaInfoId!: number;

  @ManyToOne(() => MediaInfo, (mi) => mi.userActions, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'mediaInfoId' })
  mediaInfo!: Relation<MediaInfo>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
