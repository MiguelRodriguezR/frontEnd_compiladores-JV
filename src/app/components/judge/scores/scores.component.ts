import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {JudgeService} from "../../../services/judge.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.less']
})
export class ScoresComponent implements OnInit {

  users: any = [];
  problems: any = [];

  constructor(private sessionService: SessionService, private judgeService: JudgeService) {
  }

  ngOnInit(): void {
    this.sessionService.getUsers().subscribe(usrs => {
      this.users = usrs;
    });
    this.judgeService.getProblems().subscribe( prob => {
      this.problems = prob;
    });
  }

  getProblemName(problem) {
    const resProb = this.problems.find( p => p.id === problem);
    return resProb ? resProb.title : '';
  }
}
