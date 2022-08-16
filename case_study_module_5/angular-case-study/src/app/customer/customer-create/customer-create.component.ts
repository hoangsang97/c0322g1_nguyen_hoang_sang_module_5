import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  name: number;
  gender: any;

  constructor() { }

  ngOnInit(): void {
  }

  createCustomer(customer: any) {
    console.log(customer.value);
  }
}
