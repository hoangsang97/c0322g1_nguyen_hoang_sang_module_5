import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber = 0;
  lastNumber = 0;
  result = 0;
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    return this.result = this.firstNumber + this.lastNumber;
  }

  subtract() {
    return this.result = this.firstNumber - this.lastNumber;
  }

  multiply() {
    return this.result = this.firstNumber * this.lastNumber;
  }

  divide() {
    return this.result = this.firstNumber / this.lastNumber;
  }
}
