import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  providers: [DatePipe],
})
export class CreateBookingComponent {

  constructor(private datepipe: DatePipe, private fb: FormBuilder, private http: HttpService,
    private activateRoute: ActivatedRoute, private router: Router) {

    this.selectedID = this.activateRoute.snapshot.queryParamMap.get('id')
    console.log("id recieved in create booking compo", this.selectedID)
    this.selectedAction = this.activateRoute.snapshot.queryParamMap.get('action')
    console.log("selected action", this.selectedAction)

  }

  travelRegForm!: FormGroup
  isUpdating: any;
  selectedID: string | null = null
  selectedAction: any

  ngOnInit() {
    this.bookingfn()
    if (this.selectedAction === 'edit') {
      this.getToUpdate()
    }

    if (this.selectedAction === 'delete') {
      this.delete()
    }
  }

  textFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
  Validators.minLength(1)]);

  bookingfn() {
    this.travelRegForm = this.fb.group({
      source: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1)]],
      destination: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1)]],
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
      room: ['']
    })

  }

  submit() {
    if (this.selectedAction === 'edit') {
      this.updatedata()
    } else {
      this.postData()
    }
    console.log("form data", this.travelRegForm.value)
    console.log("entire form data", this.travelRegForm)
  }

  reload() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
  
  //POST
  postData() {
    this.http.postDataToServer('bookings', this.travelRegForm.value).subscribe({
      next: (response: any) => {
        console.log("response recieved", response)
      }
    })
  }

  //PUT
  getToUpdate() {
    const endpoint = 'bookings/' + this.selectedID
    this.http.getDataFromServer(endpoint).subscribe({
      next: (resp: any) => {
        console.log("response to patch", resp)
        this.travelRegForm.patchValue(resp)
      }
    })
  }

  updatedata() {
    const endpoint = 'bookings/' + this.selectedID
    this.http.putDataToServer(endpoint, this.travelRegForm.value).subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          console.log("data according to selected id", response)
          this.bookingfn()
        }
      }
    })
  }

  //DELETE
  delete() {
    const selection = confirm("This will Erase the Data Permanently!")

    if (selection) {
      const endpoint = "bookings/" + this.selectedID
      this.http.deleteDataFromServer(endpoint).subscribe({
        next: (response: any) => {
          this.router.navigate(['/display'])
          console.log("booking with ID" + this.selectedID + "deleted")
        }
      })
    }
  }


}

// source:any
// destination:any
// room:any
// dateS:any
// dateE:any


// datefn(){
//  const startD  = this.travelRegForm.value.start
//   const endD = this.travelRegForm.value.end

//   this.dateS = this.datepipe.transform(startD, 'dd/MM/yyyy')
//   this.dateE = this.datepipe.transform(endD, 'dd/MM/yyyy')

//   console.log("start date",this.dateS)
//   console.log("end date",this.dateE)
//   console.log("source", this.source)
// }

// this.travelRegForm.valueChanges.subscribe((value) => {
//   if (!this.isUpdating) {
//     this.isUpdating = true; // Prevent recursion
//     if (value.start instanceof Date) {
//       this.travelRegForm.patchValue(
//         {
//           start: this.formatDate(value.start),
//         },
//         { emitEvent: false }
//       );
//     }
//     if (value.end instanceof Date) {
//       this.travelRegForm.patchValue(
//         {
//           end: this.formatDate(value.end),
//         },
//         { emitEvent: false }
//       );
//     }
//     this.isUpdating = false; // Reset the flag
//   }
// });

// formatDate(date: Date | string): string | null {
//   return this.datepipe.transform(date, 'yyyy/MM/dd') // Adjust format as needed
// }
