import { BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
export class UserAuth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', unique: true, nullable: true, default: null })
  refreshToken!: string | null;

  @Column({ unique: true, nullable: true, default: null })
  activationLink!: string;

  @Column({ default: false })
  isEmailConfirmed!: boolean;

  @OneToOne(() => User, (user) => user.userAuth)
  user!: Relation<User>;
}
