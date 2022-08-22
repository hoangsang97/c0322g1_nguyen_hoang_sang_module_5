import {Injectable} from '@angular/core';
import {Contract} from '../module/contract';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Contract[]>(API_URL + '/contract');
  }

  save(contract: Contract) {
    return this.httpClient.post<Contract>(API_URL + '/contract', contract);
  }

  findById(id: number) {
    return this.httpClient.get<Contract>(`${API_URL}/contract/${id}`);
  }

  edit(id: number, contract: Contract) {
    return this.httpClient.put<Contract>(`${API_URL}/contract/${id}`, contract);
  }

  delete(id: number) {
    return this.httpClient.delete<Contract>(`${API_URL}/contract/${id}`);
  }
}
