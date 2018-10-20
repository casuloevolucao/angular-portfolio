import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/Data.service';
import { About } from '../shared/sobre.model';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  about:About[]

  constructor(
    private Data:DataService
  ) { }

  ngOnInit() {
    this.Data.getSobre().subscribe(itens=>{
      this.about = itens
    })
  }

}
