import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';
import {CustomerTypeService} from './customer-type.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private customerTypeService: CustomerTypeService) {
    this.customerList.push({
      id: 1,
      name: 'Nguyễn Văn An',
      dateOfBirth: '1998-08-09',
      gender: false,
      idCard: '9894739372',
      phoneNumber: '3184434343',
      email: 'hoang@gmail.com',
      address: 'ĐN',
      customerType: customerTypeService.customerTypeList[1]
    }, {
      id: 2,
      name: 'Nguyễn Văn Binh',
      dateOfBirth: '1998-08-09',
      gender: false,
      idCard: '9894739372',
      phoneNumber: '3184434343',
      email: 'hoang@gmail.com',
      address: 'ĐN',
      customerType: customerTypeService.customerTypeList[1]
    });
  }

  saveCustomer(customer) {
    customer.id = this.customerList.length + 1;
    if (customer.customerType === 1) {
      customer.customerType = this.customerTypeService.customerTypeList[0];
    } else if (customer.customerType === 2) {
      customer.customerType = this.customerTypeService.customerTypeList[1];
    }
    this.customerList.push(customer);
  }

  removeCustomer(id) {
    const index = this.customerList.findIndex(customer => customer.id === id);
    this.customerList.splice(index, 1);
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.id === id);
  }

  editCustomer(customer) {
    for (const item of this.customerList) {
      if (item.id === customer.id) {
        item.name = customer.name;
        item.dateOfBirth = customer.dateOfBirth;
        item.gender = customer.gender;
        item.idCard = customer.idCard;
        item.phoneNumber = customer.phoneNumber;
        item.email = customer.email;
        item.address = customer.address;
        if (customer.customerType === 1) {
          item.customerType = this.customerTypeService.customerTypeList[0];
        } else if (customer.customerType === 2) {
          item.customerType = this.customerTypeService.customerTypeList[1];
        }
      }
    }
  }
}

