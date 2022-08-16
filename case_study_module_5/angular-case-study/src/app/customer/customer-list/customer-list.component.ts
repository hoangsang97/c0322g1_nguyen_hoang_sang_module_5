import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor() {
    this.customerList.push({
      id: 1,
      name: 'Nguyễn Văn An',
      dateOfBirth: '1998-08-09',
      gender: false,
      idCard: '9894739372',
      phoneNumber: '3184434343',
      email: 'hoang@gmail.com',
      address: 'ĐN',
      customerType: {id: 1, name: 'Vip'}
    });
  }

  ngOnInit(): void {
  }

}
