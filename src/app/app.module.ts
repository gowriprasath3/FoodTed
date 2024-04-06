import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { FilterReciepePipe } from './filter-reciepe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    LandingPageComponent,
    SubscribeComponent,
    SearchComponent,
    FilterReciepePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    NgxIntlTelInputModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
