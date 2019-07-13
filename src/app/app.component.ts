import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { strDatoS, strerror, transportin, param, transportout } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  url:transportout;

  ngOnInit(): void {
  }

  constructor(public rest: ApiService, private route: ActivatedRoute, private router: Router) {

  }

  getUrl() {
    this.rest.getUrl$().subscribe(e => this.url = e);
  }




}
