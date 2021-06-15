import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico.validator'

export class Usuario {
  id: number

  @IsNotEmpty({
    message: 'nomeDeUsuario nao pode ser nulo.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  @IsNomeDeUsuarioUnico({
    message: 'nomeDeUsuario precisa ser unico.',
  })
  nomeDeUsuario: string

  @IsEmail(
    {},
    {
      message: 'Insira um email valido.',
    }
  )
  @IsNotEmpty({
    message: 'email nao pode ser nulo.',
  })
  email: string

  @IsNotEmpty({
    message: 'senha nao pode ser nula.',
  })
  senha: string

  @IsNotEmpty({
    message: 'nomeCompleto nao pode ser nulo.',
  })
  @IsString()
  nomeCompleto: string
  dataDeEntrada: Date
}
