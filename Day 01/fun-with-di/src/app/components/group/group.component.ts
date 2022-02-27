import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    // AdditionService
    {
      provide: AdditionService, 
      useClass: AdditionService
  }]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}