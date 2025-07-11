import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  mediaId!: number;

  @Column()
  season!: number;

  @Column()
  episode!: number;

  @Column()
  isWatched!: boolean;
}
