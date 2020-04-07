import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Readable, pipeline } from 'stream';
import * as fs from 'fs'
import * as util from 'util'

@Injectable()
export class AppService {
  constructor(@Inject('AUTH0_SERVICE') private auth0Service: ClientProxy, @Inject('GOOGLE_SERVICE') private googleService: ClientProxy) {}
  async addUser(id: Record<string, unknown>) {
    const token = await this.auth0Service.send('get_user_info', id).toPromise()
    const userInfo = await this.googleService.send('get_user_info', token).toPromise()
    try {
      await util.promisify(pipeline)(Readable.from(JSON.stringify(userInfo)), fs.createWriteStream(`/usr/files/${userInfo.email}.json`))
    } catch(e) {
      throw e;
    }
  }
}
