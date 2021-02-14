import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API} from './constants';
import {filter} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {

  selectedCategory = null;
  selectedProblem = null;

  constructor(private http: HttpClient) {
  }

  getProblems() {
    return this.http.get(`${API}/problemas`);
  }

  sendProblem(body) {
    return this.http.post(`${API}/cplusplus`, body);
  }

  addProblemToUser(body) {
    return this.http.put(`${API}/users`, body);
  }

}
