import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class Usuario {
  id: number

  @IsNotEmpty({
    message: 'nomeDeUsuario nao pode ser nulo.',
  })
  @IsString()
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
