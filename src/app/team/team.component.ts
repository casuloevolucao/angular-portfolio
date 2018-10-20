import { Component, OnInit } from '@angular/core';
import { Team } from '../shared/team.model';
import { DataService } from '../shared/Data.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:Team[]

  constructor(
    private Data: DataService
  ) {}

  ngOnInit() {
    this.Data.getTeam().subscribe(itens=>{
      this.team = itens
    })
    
  }

}
