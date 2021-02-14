import {Component, OnInit} from '@angular/core';
import {JudgeService} from "../../../services/judge.service";
import {NavigationService} from "../../../services/navigation.service";

@Component({
  selector: 'app-lista-problemas',
  templateUrl: './lista-problemas.component.html',
  styleUrls: ['./lista-problemas.component.less']
})
export class ListaProblemasComponent implements OnInit {

  problems = [];

  constructor(private judgeService: JudgeService,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    console.log(this.judgeService);
    this.judgeService.getProblems().subscribe((res : any) => {
      this.problems = res.filter(p => p.categoria == this.judgeService.selectedCategory);
      console.log(this.problems);
    });
  }

  get _judgeService() {
    return this.judgeService;
  }

  tryProblem(problem) {
    this.judgeService.selectedProblem = problem;
    this.navigationService.setView('resolverProblema');
  }
}
