import { Injectable, HttpService } from '@nestjs/common';
import { EnvService } from './config';

@Injectable()
export class AppService {
  
  bearerToken: string;
  constructor(private httpService: HttpService, private readonly envService: EnvService) {

  }
  
  async getUserInfo(id: string) {
    let response;
    try {
      response = await this.httpService.get(`https://${this.envService.get('DOMAIN')}/api/v2/users/${id}`, 
      {responseType:'json', headers:{authorization:`Bearer ${this.bearerToken}`}})
        .toPromise()
      return response.data.identities[0].access_token;
    } catch(e) {
      const { data } = await this.getAuth0Token()
      this.bearerToken = data['access_token']
      return this.getUserInfo(id)
    } 

  }

  async getAuth0Token() {
    let response;
    try {
      response = await this.httpService.post(`https://${this.envService.get('DOMAIN')}/oauth/token`,
      {"client_id":this.envService.get('API_EXPLORER_CLIENT_ID'),"client_secret":this.envService.get('API_EXPLORER_CLIENT_SECRET'),"audience":`https://${this.envService.get('DOMAIN')}/api/v2/`,"grant_type":"client_credentials"},
      {responseType:'json'}).toPromise();
      return response;
    } catch (e) {
      return ;
    }
  }
}
