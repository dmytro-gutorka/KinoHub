import { Column, Entity, OneToMany, PrimaryColumn, Relation } from 'typeorm';
import { MediaGenre } from './MediaGenre.js';

@Entity({ schema: 'public' })
export class Genre {
  @PrimaryColumn({ type: 'int' })
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => MediaGenre, (mg) => mg.genre)
  mediaItems!: Relation<MediaGenre[]>;
}
