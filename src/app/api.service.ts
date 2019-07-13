import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {tap, catchError, map} from 'rxjs/operators';
import { Observable, throwError , of } from 'rxjs';
import { strDatoS, strerror, transportin, param, transportout } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
/*       headers: new HttpHeaders({
        'Access-Control-Allow-Headers': '*'
      })
 */    };


  getUrl$() {

    return this.http.get<transportout>('http://localhost:3000/test/', this.httpOptions);
    //return this.http.get<transportout>('http://restandroid.gaolos.com/test/', this.httpOptions);
    //return this.http.get<transportout>('http://localhost:3000/test/', this.httpOptions);
  }



}


