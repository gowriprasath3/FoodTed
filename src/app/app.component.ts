import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('user') user:any;
loading=true;
  title = 'foodsense';

  constructor(private cd: ChangeDetectorRef){

  }
  ngAfterViewInit(): void {
    
      this.loading=false;
     this.cd.detectChanges();
  }
}
