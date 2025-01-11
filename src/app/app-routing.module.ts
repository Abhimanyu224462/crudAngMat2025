import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookingComponent } from './travel/display-booking/display-booking.component';
import { CreateBookingComponent } from './travel/create-booking/create-booking.component';
import { Trialtransfer2Component } from './transfer/trialtransfer2/trialtransfer2.component';

const routes: Routes = [
  {path:'create', component:CreateBookingComponent},
  {path:'display', component:DisplayBookingComponent},
  {path:'transfer2', component:Trialtransfer2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
