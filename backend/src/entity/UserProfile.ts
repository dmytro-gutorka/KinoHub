import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { User } from './User.js';

type Social = {
  telegram?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
};

@Entity({ schema: 'public' })
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Column({ nullable: true })
  bio!: string;

  @Column({ nullable: true })
  avatarUrl!: string;

  @Column({ nullable: true })
  city!: string;

  @Column({ nullable: true })
  country!: string;

  @Column({ nullable: true })
  birthDate!: string;

  @Column({ type: 'jsonb', default: {} })
  social!: Social;

  @OneToOne(() => User, (user) => user.profile)
  user!: Relation<User>;
}
