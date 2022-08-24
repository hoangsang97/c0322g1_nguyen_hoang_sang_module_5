import {Injectable} from '@angular/core';
import {Customer} from '../module/customer';
import {CustomerTypeService} from '../service/customer-type.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const SERVICE_URL = `${environment.serviceUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private httpClient: HttpClient,
              private customerTypeService: CustomerTypeService) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(SERVICE_URL + '/customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.post<Customer>(SERVICE_URL + '/customers', customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${SERVICE_URL}/customers/${id}`);
  }

  removeCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${SERVICE_URL}/customers/${id}`);
  }

  editCustomer(id: number, customer: Customer): Observable<Customer> {
    this.setValueCustomerType(customer);
    return this.httpClient.put<Customer>(`${SERVICE_URL}/customers/${id}`, customer);
  }

  setValueCustomerType(customer) {
    for (const item of this.customerTypeService.customerTypeList) {
      if (item.id === customer.customerType) {
        customer.customerType = item;
      }
    }
  }

  search(nameCustomer: string, customerTypeId: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${SERVICE_URL}/customers/search?nameCustomer=${nameCustomer}&customerTypeId=${customerTypeId}`);
  }
}

