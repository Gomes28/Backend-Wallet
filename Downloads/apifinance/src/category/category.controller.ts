import { Body, Controller, Get, Param, Post, UseGuards, Request, Req, HttpException, HttpStatus} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ResultadoDto } from "src/dto/resultado.dto";
import { TokenService } from "src/token/token.service";
import { Usuario } from "src/usuario/usuario.entity";
import { CategoryCadastrarDto } from "./dto/category.cadastrar.dto";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";


@Controller('category')
export class CategoryController {
    constructor(private readonly CategoryService : CategoryService,
           private readonly tokenService: TokenService) {}

           @UseGuards(JwtAuthGuard)
           @Post('cadastrar')
           async cadastrar(@Body() data: CategoryCadastrarDto, @Req() req): Promise<ResultadoDto>{    
               return this.CategoryService.cadastrar(data)
             }
           }