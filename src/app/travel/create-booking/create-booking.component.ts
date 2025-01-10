import { DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  providers: [DatePipe],
})
export class CreateBookingComponent {
  
  constructor(private datepipe:DatePipe, private fb:FormBuilder, private http:HttpService){}

  

  travelRegForm!:FormGroup
  isUpdating: any;

ngOnInit(){
  this.bookingfn() 
}

textFormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1)]);

bookingfn(){
  this.travelRegForm = this.fb.group({
source:['',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1)]],
destination:['',[Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(1)]],
start: new FormControl<Date | null>(null),
end: new FormControl<Date | null>(null),
room:['']
})
this.travelRegForm.valueChanges.subscribe((value) => {
  if (!this.isUpdating) {
    this.isUpdating = true; // Prevent recursion
    if (value.start instanceof Date) {
      this.travelRegForm.patchValue(
        {
          start: this.formatDate(value.start),
        },
        { emitEvent: false }
      );
    }
    if (value.end instanceof Date) {
      this.travelRegForm.patchValue(
        {
          end: this.formatDate(value.end),
        },
        { emitEvent: false }
      );
    }
    this.isUpdating = false; // Reset the flag
  }
});
}

formatDate(date: Date | string): string | null {
  return this.datepipe.transform(date, 'yyyy-MM-dd') // Adjust format as needed
}

submit() {
console.log("form data", this.travelRegForm.value)
console.log("entire form data", this.travelRegForm)
this.postData()
}

//POST
postData(){
  this.http.postDataToServer('bookings',this.travelRegForm.value).subscribe({
    next:(response:any)=>{
      console.log("response recieved",response)
    }
  })
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
}