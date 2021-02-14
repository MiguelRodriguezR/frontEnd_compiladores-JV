import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from '../../../services/constants';
import {NavigationService} from '../../../services/navigation.service';
import {JudgeService} from '../../../services/judge.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.less']
})
export class CategoriasComponent implements OnInit {

  categorias = CATEGORIES;

  constructor(private navigationService: NavigationService,
              private judgeService: JudgeService) { }

  ngOnInit(): void {

  }

  getProblems(categoria) {
    this.judgeService.selectedCategory = categoria.name;
    this.navigationService.setView('listaProblemas');
  }
}
