import { Pipe, PipeTransform } from '@angular/core';
import { FoodServiceService } from './food-service.service';
import { Reciepe } from './reciepe';

@Pipe({
  name: 'filterReciepe'
})
export class FilterReciepePipe implements PipeTransform {


  //reciepeList:any;
  transform(value: Array<Reciepe>, filteredString: string, selectedCategory: string) {
    if (value.length == 0 || (filteredString == "" && selectedCategory == "")) {
      return value;
    }else if(selectedCategory){
      if(filteredString){
        return value.filter(reciepe => reciepe.title.toLowerCase().includes(filteredString.toLowerCase()) && reciepe.category == selectedCategory);

      }
      return value.filter(reciepe => reciepe.category == selectedCategory);
     
    }else if(filteredString){
      return value.filter(reciepe => reciepe.title.toLowerCase().includes(filteredString.toLowerCase()));
    }
   else{
      return value.filter(reciepe => reciepe.title.toLowerCase().includes(filteredString.toLowerCase()) && reciepe.category == selectedCategory);
      
    }




  }

}

