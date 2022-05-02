import { Injectable, Inject, Param } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import * as bycrypt from 'bcrypt';
import { CategoryCadastrarDto } from './dto/category.cadastrar.dto'
import { Usuario } from 'src/usuario/usuario.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Category>,
  ) {}

  async cadastrar(data: CategoryCadastrarDto,): Promise<ResultadoDto>{
    let category = new Category()
    category.nome = data.nome
    return this.enderecoRepository.save(category).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Categoria cadastrado com sucesso"
    }
    }).catch(() => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar a Categoria"
    }
    })
  }
}