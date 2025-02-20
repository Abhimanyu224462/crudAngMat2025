import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from '../http.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookingComponent } from '../create-booking/create-booking.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.scss']
})
export class DisplayBookingComponent {

  constructor(private http: HttpService, public dialog: MatDialog, private router: Router) { }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  bookingData: any
  displayedColumns: string[] = ['actions', 'id', 'source', 'destination', 'start', 'end', 'room'];
  dataSource!: MatTableDataSource<UserData>;

  ngOnInit() {
    this.getData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectTo(id: any) {
    this.router.navigate([], {
      queryParams: { id: id, action: 'edit' }
    })
  }

  redirectToDelete(id: any) {
    this.router.navigate(['/create'], {
      queryParams: { id: id, action: 'delete' }
    })
  }

  openDialog() {
    setTimeout(() => {
      this.dialog.open(CreateBookingComponent);
    }, 1);
  }

  //GET
  getData() {
    this.http.getDataFromServer("bookings").subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          this.bookingData = response
          console.log("data recieved from backend", this.bookingData)

          this.dataSource = new MatTableDataSource(this.bookingData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    })
  }

}

export interface UserData {
  id: string;
  source: string;
  destination: string;
  start: string;
  end: string;
  room: string;
}

