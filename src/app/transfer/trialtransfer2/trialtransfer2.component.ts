import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Trialtransfer1Component } from '../trialtransfer1/trialtransfer1.component';
@Component({
  selector: 'app-trialtransfer2',
  templateUrl: './trialtransfer2.component.html',
  styleUrls: ['./trialtransfer2.component.scss'],
  template:'<app-trialtransfer1></app-trialtransfer1>'
})
export class Trialtransfer2Component implements AfterViewInit {
  
  constructor(){}

  @ViewChild(Trialtransfer1Component) Trialtransfer1Component!:Trialtransfer1Component

  ngAfterViewInit(){
    this.Trialtransfer1Component.emitData.subscribe((data:any)=>{
      this.recieveValue = data
      console.log("data recieve at transfer 2", this.recieveValue)
    })
  }

  ngOnInit(){
    
  }
recieveValue:string = ""



// getData(data:any){
//   this.recieveValue = data
//   console.log("data recieve at transfer 2", this.recieveValue)
// }
}
