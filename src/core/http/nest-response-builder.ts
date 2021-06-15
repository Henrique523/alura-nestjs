/* eslint-disable @typescript-eslint/ban-types */
import { NestResponse } from './nest-response'

export class NestResponseBuilder {
  private resposta: NestResponse = {
    status: 200,
    headers: {},
    body: {},
  }

  public comStatus(status: number) {
    this.resposta.status = status
    return this
  }

  public comHeaders(header: object) {
    this.resposta.headers = Object.assign(this.resposta.headers, header)
    return this
  }

  public comBody(body: object) {
    this.resposta.body = body
    return this
  }

  public build() {
    return new NestResponse(this.resposta)
  }
}
