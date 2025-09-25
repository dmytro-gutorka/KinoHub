import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
} from 'typeorm';
import { WatchStatus } from '../types/types.js';
import { MediaInfo } from './MediaInfo.js';

@Entity({ schema: 'public' })
@Unique(['mediaId', 'userId', 'mediaType'])
export class MediaUserAction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaInfoId!: number;

  @Column()
  mediaId!: number;

  @Column()
  userId!: number;

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

  @ManyToOne(() => MediaInfo, (mi) => mi.userActions, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'mediaInfoId' })
  mediaInfo!: Relation<MediaInfo>;
}
