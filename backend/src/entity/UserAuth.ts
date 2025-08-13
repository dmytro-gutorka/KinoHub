import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { User } from './User.js';

@Entity({ schema: 'public' })
export class UserAuth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: true, default: null })
  refreshToken!: string;

  @Column({ unique: true, nullable: true, default: null })
  activationLink!: string;

  @Column({ default: false })
  isEmailConfirmed!: boolean;

  @OneToOne(() => User, (user) => user.userAuth)
  @JoinColumn()
  user!: Relation<User>;
}
