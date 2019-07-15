import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as Models from './models';
import {map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  url: Models.transportout;

  elem: Models.menuLateral;

  ID_Us: number;
  Usu: string;

  Token: string='hmo0l3ridv1ce3qi6diyc8iwrsxszs7ku6rq2whsqfle2rglcn';

  //MenuGaolos: contenedorMenuLateral;
  Menus: Models.menuLateral[];

  ngOnInit(): void {
  }

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  getUrl() {
    this.rest.getUrl$().subscribe(e => this.url = e);
  }

  getLogin() {
    let Transporte: Models.transportin = new Models.transportin();
    Transporte.parameters = new Models.param();

    let dat: Models.strDatoS = new Models.strDatoS();
    dat.datoS1 = this.Token;
    dat.datoS2 = '';
    dat.datoS3 = '';
    dat.datoS4 = 'previdavid';
    dat.datoS5 = '1234';
    Transporte.obj = dat;

    this.rest.loginUser$(Transporte).subscribe(e => {
      this.url = e;
      let unz = <Models.strDato>e.obj;
      this.ID_Us = unz.datoI;
      this.Usu = unz.datoS;
      return e;
    });


  }

  getIncio() {
    let Transporte: Models.transportin = new Models.transportin();
    Transporte.parameters = new Models.param();

    let dat: Models.strDato = new Models.strDato();
    dat.datoI = this.ID_Us;
    dat.datoS = this.Token;
    Transporte.obj = dat;

    this.rest.inicio$(Transporte).subscribe(e => {
      console.log(e);
      let unz = <Models.sesionIniciada>e.obj;
      console.log(unz);
      let MenuGaolos = <Models.contenedorMenuLateral>unz.menuGaolos;
      console.log(MenuGaolos);
      let MenuLateral = <Models.menuLateral[]>MenuGaolos._menus;
      console.log(MenuLateral);
      this.Menus = MenuLateral;
    });
  }


}
