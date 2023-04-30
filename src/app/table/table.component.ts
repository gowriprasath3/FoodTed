import { Component, Input, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { User } from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private foodservice: FoodServiceService) { }

  


  userArray:User[]=new Array();

  ngOnInit(): void {
  this.userArray= this.foodservice.getSubscribers();
  console.log("tble compt:" + this.userArray)
  }

}
