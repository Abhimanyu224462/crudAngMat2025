import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBookingComponent } from './travel/display-booking/display-booking.component';
import { CreateBookingComponent } from './travel/create-booking/create-booking.component';

const routes: Routes = [
  {path:'create', component:CreateBookingComponent},
  {path:'display', component:DisplayBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
