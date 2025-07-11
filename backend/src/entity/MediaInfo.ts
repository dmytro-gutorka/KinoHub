import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MediaUserActions } from './MediaUserActions.js';

@Entity()
export class MediaInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  mediaId!: number;

  @Column()
  runtime!: number;

  @Column()
  rating!: number;

  @Column()
  releaseDate!: string;

  @Column()
  title!: string;

  @Column()
  posterPath!: string;

  @Column()
  voteAverage!: number;

  @Column()
  mediaType!: 'tv' | 'movie';

  @OneToMany(() => MediaUserActions, (mediaUserActions) => mediaUserActions.mediaInfo)
  userActions!: MediaUserActions[];
}
