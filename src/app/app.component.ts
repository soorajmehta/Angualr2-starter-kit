import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 
  clock = Observable.interval(1000).take(5);
  
  constructor(private api: ApiService) {
  }
}
