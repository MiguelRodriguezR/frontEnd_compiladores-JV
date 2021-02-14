import {Component, OnInit} from '@angular/core';
import {JudgeService} from '../../../services/judge.service';
import {SessionService} from '../../../services/session.service';

@Component({
  selector: 'app-resolver-problema',
  templateUrl: './resolver-problema.component.html',
  styleUrls: ['./resolver-problema.component.less']
})
export class ResolverProblemaComponent implements OnInit {

  code = '#include <iostream>\n' +
    'using namespace std;\n' +
    'int main(){\n' +
    '    printf("hola mundo");\n' +
    '    return 0;\n' +
    '}';
  problem = null;
  results = 'ningún resultado por ahora, envia tu código para empezar a testear';
  theme = 'vs';
  codeModel = {
    language: 'cpp',
    value: this.code,
    dependencies: ['@types/node', '@ngstack/translate', '@ngstack/code-editor'],
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  badSolutions = [];
  goodSolutions = [];

  sendingProblem = false;


  constructor(private judgeService: JudgeService, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.problem = this.judgeService.selectedProblem;
  }

  get _judgeService() {
    return this.judgeService;
  }

  onCodeChanged(e) {
    this.code = e;
  }

  sendProblem() {
    const body = {
      code: this.code,
      idProblem: this.problem.id
    };
    this.sendingProblem = true;
    this.judgeService.sendProblem(body).subscribe((res: any) => {
      this.badSolutions = res.respuestasCasos.filter(sol => sol.includes('Se esperaba:'));
      this.goodSolutions = res.respuestasCasos.filter(sol => !sol.includes('Se esperaba:'));
      this.validateAllOk();
    }, e => {
      console.log(e);
      this.badSolutions = [e.error.msg];
      this.goodSolutions = [];
      this.sendingProblem = false;
    }, () => {
      this.sendingProblem = false;
    });
  }

  validateAllOk() {
    if (this.badSolutions.length == 0) {
      console.log('PASO TODO');
      const body = {
        idUser: this.sessionService.activeSession.id,
        idProblem: this.problem.id
      };
      this.judgeService.addProblemToUser(body).subscribe( console.log);
    }
  }
}
