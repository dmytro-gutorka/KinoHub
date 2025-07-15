import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { User } from './User.js';

@Entity()
export class UserAuthentication extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: true, default: null })
  refreshToken!: string;

  @Column({ unique: true, nullable: true, default: null })
  activationLink!: string;

  @OneToOne(() => User, (user) => user.userAuth)
  @JoinColumn()
  user!: User;
}
