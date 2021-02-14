import {Injectable} from '@angular/core';
import {API} from './constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  activeSession = null;
  errorLogin = false;

  constructor(private http: HttpClient) {
    this.activeSession = this.getSession();
  }

  getUsers() {
    return this.http.get(`${API}/users`);
  }

  getSession() {
    return JSON.parse(window.sessionStorage.getItem('session'));
  }

  setSession(session) {
    window.sessionStorage.setItem('session', JSON.stringify(session));
    this.activeSession = this.getSession();
  }

  destroySession() {
    window.sessionStorage.removeItem('session');
    this.activeSession = this.getSession();
  }

  login({username, password}) {
    this.getUsers().subscribe((usersList: any) => {
      console.log({usersList, username, password});
      const user: any = usersList.find(u => u.email === username);
      if (user && user.password === password) {
        this.setSession(user);
      } else {
        this.errorLogin = true;
      }
    });
  }
}
