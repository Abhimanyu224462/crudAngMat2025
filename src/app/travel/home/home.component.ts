import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookingComponent } from '../create-booking/create-booking.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateBookingComponent);
  }
}
