import { Category } from 'src/category/category.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  valor: string;

  @ManyToOne(() => Usuario, usuario => usuario.servicos)
  usuario: Usuario

  @ManyToOne(() => Category, category => category.servicos)
  category: Category

}