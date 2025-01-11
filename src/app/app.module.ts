import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Trial1Component } from './trial1/trial1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateBookingComponent } from './travel/create-booking/create-booking.component';
import { DisplayBookingComponent } from './travel/display-booking/display-booking.component';
import { HomeComponent } from './travel/home/home.component';
import { AngMatModule } from './ang-mat/ang-mat.module';
import { HttpClientModule } from '@angular/common/http';
import { Trialtransfer1Component } from './transfer/trialtransfer1/trialtransfer1.component';
import { Trialtransfer2Component } from './transfer/trialtransfer2/trialtransfer2.component';


@NgModule({
  declarations: [
    AppComponent,
    Trial1Component,
    CreateBookingComponent,
    DisplayBookingComponent,
    HomeComponent,
    Trialtransfer1Component,
    Trialtransfer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngMatModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
