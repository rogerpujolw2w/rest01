import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError , of } from 'rxjs';
import { strDato, strDatoS, strerror, transportin, param, transportout } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  urlRest = 'http://localhost:60618';
//  urlRest = 'https://restandroid.gaolos.com/test';

  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
// Cors problema solucionado: https://stackoverflow.com/questions/49726333/415-unsupported-media-type-angular-4-post?rq=1

  getUrl$() {

    return this.http.get<transportout>(this.urlRest + '/test/', this.headers);
  }

  loginUser$(Transporte: transportin) {
    return this.http.post<transportout>(this.urlRest + '/logincontroller/androidloginandroid/', Transporte, this.headers); // options
  }

  inicio$(Transporte: transportin) {
    return this.http.get<transportout>(this.urlRest + '/logincontroller/angularinicio/?paramsin=' + JSON.stringify(Transporte) , this.headers); // options
  }

}


