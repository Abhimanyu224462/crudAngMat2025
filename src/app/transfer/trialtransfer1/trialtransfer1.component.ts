import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trialtransfer1',
  templateUrl: './trialtransfer1.component.html',
  styleUrls: ['./trialtransfer1.component.scss']
})
export class Trialtransfer1Component {

sendValue:string = ""

@Output()
emitData:EventEmitter<string> = new EventEmitter

  sendData() {
this.emitData.emit(this.sendValue)
console.log("value sent fron 1", this.sendValue)
}

}
