import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation, Unique } from 'typeorm';
import { MediaType } from '../types/types.js';
import { MediaUserAction } from './MediaUserAction.js';
import { MediaGenre } from './MediaGenre.js';
import { Episode } from './Episode.js';

@Entity({ schema: 'public' })
@Unique(['mediaId', 'mediaType'])
export class MediaInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaId!: number;

  @Column({ default: 0, type: 'double precision' })
  runtime!: number;

  @Column({ default: 'N/a' })
  releaseDate!: string;

  @Column({ default: 'N/a' })
  title!: string;

  @Column({ default: 'N/a' })
  posterPath!: string;

  @Column({ default: null, nullable: true, type: 'double precision' })
  voteAverage!: number;

  @Column({ default: null, nullable: true })
  totalEpisodes!: number;

  @Column({ default: null, nullable: true })
  totalSeasons!: number;

  @Column()
  mediaType!: MediaType;

  @OneToMany(() => Episode, (e) => e.mediaInfo)
  episodes!: Relation<Episode[]>;

  @OneToMany(() => MediaUserAction, (mua) => mua.mediaInfo)
  userActions!: Relation<MediaUserAction>;

  @OneToMany(() => MediaGenre, (mg) => mg.mediaItem)
  genres!: Relation<MediaGenre[]>;
}
