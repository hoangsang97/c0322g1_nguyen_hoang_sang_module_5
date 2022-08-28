import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {BenhAn} from '../module/benh-an';

const API_URL = `${environment.API_URl}`;

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(API_URL + '/patients/list?page=' + page);
  }

  findById(id: number): Observable<BenhAn> {
    return this.httpClient.get<BenhAn>(`${API_URL}/patients/${id}`);
  }

  create(patient: BenhAn): Observable<BenhAn> {
    return this.httpClient.post<BenhAn>(`${API_URL}/patients`, patient);
  }

  remove(id: number): Observable<BenhAn> {
    return this.httpClient.delete<BenhAn>(`${API_URL}/patients/${id}`);
  }

  edit(id: number, patient: BenhAn): Observable<BenhAn> {
    return this.httpClient.put<BenhAn>(`${API_URL}/patients/${id}`, patient);
  }

  search(page: number, name: string): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(`${API_URL}/patients/search?page=${page}&namePatient=${name}`);
  }
}
