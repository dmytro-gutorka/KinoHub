import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { MediaInfo } from './MediaInfo.js';

export enum WatchStatus {
  ToWatch = 'toWatch',
  IsWatching = 'isWatching',
  OnHold = 'onHold',
  Favorites = 'favorites',
  Archived = 'archived',
}

@Entity()
@Unique(['mediaInfo', 'userId'])
export class MediaUserActions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaId!: number;

  @Column()
  userId!: number;

  @Column({ default: null, nullable: true })
  isLiked!: boolean;

  @Column({ default: null, nullable: true })
  isWatched!: boolean;

  @Column({ default: null, nullable: true })
  rating!: number;

  @Column({ default: null, nullable: true, type: 'enum', enum: WatchStatus })
  watchStatus!: WatchStatus | null;

  @ManyToOne(() => MediaInfo, (mediaInfo) => mediaInfo.userActions, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'mediaId', referencedColumnName: 'mediaId' })
  mediaInfo!: MediaInfo;
}
