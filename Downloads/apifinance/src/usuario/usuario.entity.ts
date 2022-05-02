import { Servico } from 'src/servico/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @OneToMany(() => Servico, servico => servico.usuario)
  servicos: Servico[];
}