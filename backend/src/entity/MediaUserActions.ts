import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum WatchStatus {
  ToWatch = 'toWatch',
  IsWatching = 'isWatching',
  OnHold = 'onHold',
  Favorites = 'favorites',
  Archived = 'archived',
}

@Entity()
export class MediaUserActions {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: false })
  isLiked!: boolean;

  @Column({ default: false })
  isWatched!: boolean;

  @Column({ default: null, nullable: true, type: 'enum', enum: WatchStatus })
  watchStatus!: WatchStatus | null;
}
