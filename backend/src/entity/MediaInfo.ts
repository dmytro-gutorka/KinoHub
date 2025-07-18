import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MediaUserActions } from './MediaUserActions.js';
import { MediaType } from '../types/types.js';

@Entity()
export class MediaInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
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

  @OneToMany(() => MediaUserActions, (mediaUserActions) => mediaUserActions.mediaInfo)
  userActions!: Promise<MediaUserActions[]>;
}
