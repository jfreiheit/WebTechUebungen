import { MembersService } from './../shared/members.service';
import { Component, OnInit } from '@angular/core';
import { Members } from '../shared/members';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  members: Members[] = [];
  tableShow = true;
  btnText = 'Tabelle verstecken';

  constructor(private ms: MembersService) {}

  ngOnInit(): void {
    this.ms.getMembers()
    .then( resp => {
      console.log(resp)
      this.members = resp;
    })
  }

  tableOnOff(): void {
    if(this.btnText == 'Tabelle verstecken' )
    {
      this.btnText = 'Tabelle zeigen';
      this.tableShow = false;
    }
    else
    {
            this.btnText = 'Tabelle verstecken';
      this.tableShow = true;
    }
  }
}
