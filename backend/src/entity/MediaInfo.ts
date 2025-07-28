import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Relation, Unique } from 'typeorm';
import { MediaUserAction } from './MediaUserAction.js';
import { MediaType } from '../types/types.js';

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

  @Column()
  mediaType!: MediaType;

  @OneToMany(() => MediaUserAction, (mediaUserActions) => mediaUserActions.mediaInfo)
  userActions!: Relation<MediaUserAction>;
}
