import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  login(e) {
    this.sessionService.login(e);
  }

  get _sessionService(){
    return this.sessionService;
  }

}
