import {Injectable} from '@angular/core';
import {API} from './constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  actualView = 'introduccion';

  constructor() {
  }

  setView(v) {
    this.actualView = v;
  }

}
