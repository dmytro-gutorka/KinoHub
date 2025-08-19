import { MediaInfo } from './MediaInfo.js';
import { Genre } from './Genre.js';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
  Unique,
} from 'typeorm';

@Entity({ schema: 'public' })
@Unique(['mediaItemId', 'genreId'])
export class MediaGenre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column()
  mediaItemId!: number;

  @Index()
  @Column()
  genreId!: number;

  @ManyToOne(() => MediaInfo, (mi) => mi.genres, { onDelete: 'CASCADE' })
  mediaItem!: Relation<MediaInfo>;

  @ManyToOne(() => Genre, (g) => g.mediaItems, { onDelete: 'CASCADE' })
  genre!: Relation<Genre>;
}
