import { Component, Input, OnInit } from '@angular/core';
import { Reciepe } from '../reciepe';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() reciepe: any;
 readMore = false;
 constructor() { }

//  @Input() reciepe: Array<Reciepe> =new Array();

  ngOnInit(): void {
  }

}
