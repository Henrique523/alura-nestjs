import { Exclude, Expose } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator'

export class Usuario {
  id: number

  @IsNotEmpty({ message: 'nomeDeUsuario nao pode ser nulo.' })
  @IsString({ message: 'nomeDeUsuario precisa ser uma string.' })
  @IsNomeDeUsuarioUnico({ message: 'nomeDeUsuario precisa ser unico.' })
  @Expose({ name: 'username' })
  nomeDeUsuario: string

  @IsEmail({}, { message: 'Insira um email valido.' })
  @IsNotEmpty({ message: 'email nao pode ser nulo.' })
  @Expose({ name: 'email' })
  email: string

  @IsNotEmpty({ message: 'senha nao pode ser nula.' })
  @Exclude({ toPlainOnly: true })
  @Expose({ name: 'password' })
  senha: string

  @IsNotEmpty({ message: 'nomeCompleto nao pode ser nulo.' })
  @IsString()
  @Expose({ name: 'fullName' })
  nomeCompleto: string

  @Expose({ name: 'joinDate' })
  dataDeEntrada: Date
}
