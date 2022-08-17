import { Injectable } from '@angular/core';
import {CustomerType} from '../module/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [];
  constructor() {
    this.customerTypeList.push({
      id: 1,
      name: 'Vip'
    }, {
      id: 2,
      name: 'Normal'
    });
  }
}
