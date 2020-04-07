import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}


  async getUserInfo(token: string): Promise<object> {
    try {
    const userInfo = await this.httpService.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {headers:{Authorization: `Bearer ${token}`}}).toPromise()
    return userInfo.data;
    } catch(e) {
      return null;
    }
  }
}
