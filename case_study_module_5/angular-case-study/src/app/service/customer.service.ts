import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';
import {CustomerTypeService} from './customer-type.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private httpClient: HttpClient,
              private customerTypeService: CustomerTypeService) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    if (customer.customerType === 1) {
      customer.customerType = this.customerTypeService.customerTypeList[0];
    } else if (customer.customerType === 2) {
      customer.customerType = this.customerTypeService.customerTypeList[1];
    }
    return this.httpClient.post<Customer>(API_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customers/${id}`);
  }

  removeCustomer(id): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  editCustomer(id, customer): Observable<Customer> {
    if (customer.customerType === 1) {
      customer.customerType = this.customerTypeService.customerTypeList[0];
    } else if (customer.customerType === 2) {
      customer.customerType = this.customerTypeService.customerTypeList[1];
    }
    return this.httpClient.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }
}

