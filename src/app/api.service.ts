import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError , of } from 'rxjs';
import * as Models from './models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  urlRest = environment.API_URL;
  //urlRest = 'http://localhost:60618';
//  urlRest = 'https://restandroid.gaolos.com/test';

  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
// Cors problema solucionado: https://stackoverflow.com/questions/49726333/415-unsupported-media-type-angular-4-post?rq=1

  getUrl$() {

    return this.http.get<Models.transportout>(this.urlRest + '/test/', this.headers);
  }

  loginUser$(Transporte: Models.transportin) {
    return this.http.post<Models.transportout>(this.urlRest + '/logincontroller/androidloginandroid/', Transporte, this.headers); // options
  }

  inicio$(Transporte: Models.transportin) {
    return this.http.get<Models.transportout>(this.urlRest + '/logincontroller/angularinicio/?paramsin=' + JSON.stringify(Transporte) , this.headers); // options
  }

}


