import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contenedorMenuLateral , sesionIniciada , strDato, strDatoS, strerror, transportin, param, transportout } from './models';
import { menuLateral } from './models';
import {map, catchError} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  url:transportout;

  elem: menuLateral;

  ID_Us: number;
  Usu: string;

  Token: string='hmo0l3ridv1ce3qi6diyc8iwrsxszs7ku6rq2whsqfle2rglcnx';

  //MenuGaolos: contenedorMenuLateral;
  Menus: menuLateral[];

  ngOnInit(): void {
  }

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  getUrl() {
    this.rest.getUrl$().subscribe(e => this.url = e);
  }

  getLogin() {
    let Transporte: transportin = new transportin();
    Transporte.parameters = new param();

    let dat: strDatoS = new strDatoS();
    dat.datoS1 = this.Token;
    dat.datoS2 = '';
    dat.datoS3 = '';
    dat.datoS4 = 'previ';
    dat.datoS5 = 'pass';
    Transporte.obj = dat;

    this.rest.loginUser$(Transporte).subscribe(e => {
      this.url = e;
      let unz = <strDato>e.obj;
      this.ID_Us = unz.datoI;
      this.Usu = unz.datoS;
      return e;
    });


  }

  getIncio() {
    let Transporte: transportin = new transportin();
    Transporte.parameters = new param();

    let dat: strDato = new strDato();
    dat.datoI = this.ID_Us;
    dat.datoS = this.Token;
    Transporte.obj = dat;

    this.rest.inicio$(Transporte).subscribe(e => {
      console.log(e);
      let unz = <sesionIniciada>e.obj;
      console.log(unz);
      let MenuGaolos = <contenedorMenuLateral>unz.menuGaolos;
      console.log(MenuGaolos);
      let MenuLateral = <menuLateral[]>MenuGaolos._menus;
      console.log(MenuLateral);
      this.Menus = MenuLateral;
    });
  }


}
