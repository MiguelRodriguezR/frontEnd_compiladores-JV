import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from "../../../services/constants";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.less']
})
export class CategoriasComponent implements OnInit {

  categorias = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

  getProblems(categoria) {
    console.log(categoria);
  }
}
