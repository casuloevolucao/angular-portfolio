import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/Data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home:any[]

  constructor(
    private Data:DataService
  ) { }

  ngOnInit() {
    this.Data.getHome().subscribe(itens=>{
      this.home = itens
    })
  }

}
