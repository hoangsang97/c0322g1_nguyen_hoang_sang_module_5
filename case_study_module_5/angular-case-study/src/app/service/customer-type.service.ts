import {Injectable} from '@angular/core';
import {CustomerType} from '../module/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [];

  constructor() {
    this.customerTypeList.push({
      id: 1,
      name: 'Diamond'
    }, {
      id: 2,
      name: 'Platinum'
    }, {
      id: 3,
      name: 'Gold'
    }, {
      id: 4,
      name: 'Silver'
    }, {
      id: 5,
      name: 'Member'
    });
  }
}
