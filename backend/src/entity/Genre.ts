import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { MediaGenre } from './MediaGenre.js';

@Entity({ schema: 'public' })
export class Genre {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => MediaGenre, (mg) => mg.genre)
  mediaItems!: Relation<MediaGenre[]>;
}
