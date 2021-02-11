import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  @Input() error = 'Hay un error con el usuario o la contraseña';
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  submit(e) {
    e.preventDefault();
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  get _sessionService() {
    return this.sessionService;
  }


}
