import { Injectable } from '@angular/core';
import reciepe from './files/reciepe.json';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  public reciepeList:{imageUrl:string,title:string,content:string}[]=reciepe;

  constructor() { }

  subscriber:any;
  tempData:any;

  public setData(user:any){
    console.log("service set"+user.lastName);
    this.tempData=user
  }

  public getData(){
    console.log("service get"+this.tempData.lastName);

    return this.tempData;
  }

  public getRecipes(){
    return this.reciepeList;
  }

  public saveSubscriber(users:any){
    this.subscriber= users;
  }

  public getSubscribers(){
    return this.subscriber;
  }

  // public getAllSubscriber(){
  //   return null;
  // }

  
}
