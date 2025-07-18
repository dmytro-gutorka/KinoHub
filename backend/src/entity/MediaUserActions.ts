import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { WatchStatus } from '../types/types.js';
import { MediaInfo } from './MediaInfo.js';

@Entity()
@Unique(['mediaInfo', 'userId'])
export class MediaUserActions {
  @PrimaryGeneratedColumn()
  id!: number;

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

  @ManyToOne(() => MediaInfo, (mediaInfo) => mediaInfo.userActions, {
    cascade: true,
    eager: true,
    lazy: true,
  })
  @JoinColumn({ name: 'mediaId', referencedColumnName: 'mediaId' })
  mediaInfo!: Promise<MediaInfo>;
}
