import { Servico } from 'src/servico/servico.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne , OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  nome: string;

  @OneToMany(() => Servico, servico => servico.category)
  servicos: Servico[];
}