import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvVarProvider } from '../../providers/env-var/env-var';
import { Jewel, IJewel } from '../../interfaces/jewel.interface';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient, public env: EnvVarProvider) {
  }

  getProduct(id: String): Observable<any> {
    return this.http.get(this.env.api + "jewel/get/update/" + id);
  }

  updateProduct(timestamp) {
    return this.http.put("http://192.168.0.14:5012/api/appData/39493000006226", { timestamp: timestamp }).map(res => res).take(1);
  }

  getPosts() {
    return this.http.get("http://192.168.0.14:5012/api/products");
  }

  updateSoldCount(jewel: any): Observable<any> {
    console.log(this.env.api + "jewel/sold");
    return this.http.post(this.env.api + "jewel/sold", jewel);
  }

  sendSms(message: any) {
    console.log(message);
    return this.http.post(this.env.api + 'jewel/share', message);
  }

  getAd(): Observable<any> {
    return this.http.get(this.env.api + "advertisement");
  }
}
