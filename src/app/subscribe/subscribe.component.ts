import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormControlName, NgForm, Validators,NgModel, FormBuilder} from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { FoodServiceService } from '../food-service.service';
import { User } from '../user';
import {nameValidator} from './validator';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {


  subscribeForm!: FormGroup;
  submitted=false;
  user:User=new User(0,"","","",new Date(),"","");

  userArray:User[]=new Array();
  tempuser:User=new User(0,"","","",new Date(),"","");
  showForm:boolean=false;
  updateUser:any;
  tempUser:any;
  insertIndex:any;
  Tablevisibility=false;
  


  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  fNamePattern='([A-Za-z0-9\. -]+)';

  constructor(private formBuilder:FormBuilder, private foodService:FoodServiceService) { 
 
  }

  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}

 

  ngOnInit(): void {
   
    this.subscribeForm = this.formBuilder.group({
      firstName:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z\s]|[0-9]+$')]),
      lastName:new FormControl('',[Validators.pattern('^[a-zA-Z\s]|[0-9]+$')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      dob:new FormControl(new Date(),[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])
    })
  }

  getFirstName(){
    return this.subscribeForm.get('firstName');
  }



  subscribe(subscribeForm:any){
 
  
  this.userArray.push( this.user);
  if(this.userArray.length!=0){
    this.Tablevisibility=true;
  }
  this.user=new User(0,"","","",new Date(),"","");
  this.subscribeForm.reset();
  }

  update(index:number,user:User){
    this.tempUser=this.userArray[index];
    this.foodService.setData(this.userArray[index]);
    console.log("Inside update"+ user.email);
    console.log("temporary user"+this.tempUser.lastName);
    this.showForm=true;
    this.updateUser=user;
    this.insertIndex=index;
   
  }

  saveUser(index:number){
    console.log("after saving",this.updateUser.firstName);
    this.userArray[index]=this.updateUser;
    this.showForm=false;
  }

  delete(index:number){
    console.log("inside delete");
  this.userArray.splice(index,1);
  if(this.userArray.length==0){
    this.Tablevisibility=false;
  }
  }
  

  cancel(index:number,user: User){
    console.log(this.foodService.getData());
   console.log("inside array"+ this.userArray[index].lastName);
    console.log("Inside cancel"+ this.tempUser.lastName)
    //this.userArray[index]=this.tempUser;
    this.showForm=false;
  }


}
