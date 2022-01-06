import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1:number;
  num2:number;
  num3:number;

  add(): void{
    this.num3 = this.num1 + this.num2;
  }
  sub(){
    this.num3 = this.num1 - this.num2;
  }
  mul(){
    this.num3 = this.num1 * this.num2;
  }
  div(){
    this.num3 = this.num1 / this.num2;
  }

}
