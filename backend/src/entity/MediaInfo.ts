import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MediaUserActions } from './MediaUserActions.js';

@Entity()
export class MediaInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  mediaId!: number;

  @Column({ type: 'double precision' })
  runtime!: number;

  @Column()
  releaseDate!: string;

  @Column()
  title!: string;

  @Column()
  posterPath!: string;

  @Column({ type: 'double precision' })
  voteAverage!: number;

  @Column()
  mediaType!: 'tv' | 'movie';

  @OneToMany(() => MediaUserActions, (mediaUserActions) => mediaUserActions.mediaInfo)
  userActions!: MediaUserActions[];
}
