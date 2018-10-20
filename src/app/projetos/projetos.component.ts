import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio.model';
import { Categories } from '../shared/categories.model';
import { DataService } from '../shared/Data.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  portfolio:Portfolio[]

  categories:Categories[]

  constructor(
    private Data:DataService
  ) { }

  ngOnInit() {
    this.Data.getPortfolio().subscribe(itens=>{
      this.portfolio = itens
    })
    this.Data.getCategoires().subscribe(itens=>{
      this.categories = itens
    })
  }

}
