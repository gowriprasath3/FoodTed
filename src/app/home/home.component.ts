import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Reciepe } from '../reciepe';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reciepe:any;
  public reciepeList:any;
  public filteredReciepeList:any;
  searchTerm$:any;
  filteredString:string="";
  selectedCategory:string="Entree";
  

  constructor(private route:ActivatedRoute, private service:FoodServiceService) {
    this.reciepeList= this.service.getRecipes();

    
   }

  
  

  ngOnInit(): void {

 console.log(this.route.snapshot.paramMap.get('searchterm'))

 //   this.reciepeList= this.service.getRecipes().
    //       filter(reciepe=> reciepe.title.toLowerCase().includes(params.searchTerm.toLowerCase()))
    //  }
     
  
  }

  filter(){
    console.log("Hello there");
    this.reciepeList= this.service.getRecipes().filter(reciepe=> reciepe.title.toLowerCase().includes(this.filteredString.toLowerCase()));
  }

}
