import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {CustomerService} from './customer.service';
import {FacilityService} from './facility.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../module/facility';
import {Customer} from '../module/customer';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];
  facility: Facility;
  customer: Customer;

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Contract[]>(API_URL + '/contract');
  }

  save(contract) {
    this.setValueContract(contract);
    return this.httpClient.post<Contract>(API_URL + '/contract', contract);
  }

  findById(id: number) {
    return this.httpClient.get<Contract>(`${API_URL}/contract/${id}`);
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
    return this.httpClient.delete<Contract>(`${API_URL}/contract/${id}`);
  }

  setValueContract(contract) {
    this.customerService.getAll().subscribe(customer => {
      for (const item of customer) {
        if (contract.customer === item.id) {
          this.customer = item;
        }
      }
    });
    this.facilityService.getAll().subscribe(facility => {
      for (const item of facility) {
        if (contract.facility === item.id) {
          this.facility = item;
        }
      }
    });
    contract.facility = this.facility;
    contract.customer = this.customer;
  }
}
