import {
  Relation,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './User.js';

@Entity()
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
