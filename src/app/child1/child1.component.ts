import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Input('title') info:string;
unit:string ="unit1";
@Input('items') items:string[];
current:string;
@Output('send') emitdata:EventEmitter<string> = new EventEmitter<string>();
constructor() {}

 addItem(){
  this.emitdata.emit(this.current);
  this.current="";
}
ngOnInit() {}
 
changeColor() {
  if(this.unit==="unit2")
    this.unit="unit1";
  else
    this.unit="unit2";
  }
}


