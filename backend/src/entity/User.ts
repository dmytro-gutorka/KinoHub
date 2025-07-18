import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, Relation } from 'typeorm';
import { UserAuth } from './UserAuth.js';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToOne(() => UserAuth, (userAuthentication) => userAuthentication.user, {
    cascade: true,
  })
  userAuth!: Relation<UserAuth>;
}
