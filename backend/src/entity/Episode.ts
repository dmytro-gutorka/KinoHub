import { MediaInfo } from './MediaInfo.js';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
} from 'typeorm';

@Entity({ schema: 'public' })
@Unique(['userId', 'tvShowId', 'season', 'episode'])
export class Episode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tvShowId!: number;

  @Column()
  userId!: number;

  @Column()
  season!: number;

  @Column()
  episode!: number;

  @Column()
  isWatched!: boolean;

  @ManyToOne(() => MediaInfo, (mi) => mi.episodes)
  mediaInfo!: Relation<MediaInfo>;
}
