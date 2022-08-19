import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {CustomerService} from './customer.service';
import {FacilityService} from './facility.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
    this.contractList.push({
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      customer: this.customerService.customerList[0],
      facility: this.facilityService.facilityList[0]
    }, {
      id: 2,
      startDate: '2020-07-14',
      endDate: '2020-07-21',
      deposit: 200000,
      customer: this.customerService.customerList[1],
      facility: this.facilityService.facilityList[2]
    }, {
      id: 3,
      startDate: '2021-01-14',
      endDate: '2021-01-18',
      deposit: 100000,
      customer: this.customerService.customerList[0],
      facility: this.facilityService.facilityList[1]
    });
  }

  getAll() {
    return this.contractList;
  }

  save(contract) {
    contract.id = this.contractList.length + 1;
    for (const item of this.contractList) {
      if (contract.facility === item.facility.id) {
        contract.facility = item.facility;
      }
      if (contract.customer === item.customer.id) {
        contract.customer = item.customer;
      }
    }
    this.contractList.push(contract);
    console.log(this.contractList);
  }

  findById(id: number) {
    return this.contractList.find(contract => contract.id === id);
  }

  edit(contract) {
    for (const facility of this.facilityService.facilityList) {
      if (contract.facility === facility.id) {
        contract.facility = facility;
      }
    }
    for (const customer of this.customerService.customerList) {
      if (contract.customer === customer.id) {
        contract.customer = customer;
      }
    }
    for (let i = 0; i < this.contractList.length; i++) {
      if (this.contractList[i].id === contract.id) {
        this.contractList[i] = contract;
      }
    }
  }

  delete(id) {
    const index = this.contractList.findIndex(contract => contract.id === id);
    this.contractList.splice(index, 1);
  }
}
