import {Component, OnInit} from '@angular/core';
import {NavigationService} from '../../../services/navigation.service';
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(private navigationService: NavigationService, private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  get _navigationService() {
    return this.navigationService;
  }

  get _sessionService() {
    return this.sessionService;
  }

}
