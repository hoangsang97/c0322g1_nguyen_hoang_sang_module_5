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

  calculator(value: any) {
    switch (value) {
      case '+':
        return this.result = this.firstNumber + this.lastNumber;
      case '-':
        return this.result = this.firstNumber - this.lastNumber;
      case '*':
        return this.result = this.firstNumber * this.lastNumber;
      case '/':
        if (this.lastNumber !== 0) {
          return this.result = this.firstNumber / this.lastNumber;
        } else {
          return this.result = 0;
        }
    }
  }
}
