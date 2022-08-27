import { Injectable } from '@angular/core';
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

  getAll(): Observable<BenhAn[]> {
    return this.httpClient.get<BenhAn[]>(API_URL + '/benhAns');
  }

  findById(id: number): Observable<BenhAn> {
    return this.httpClient.get<BenhAn>(`${API_URL}/benhAns/${id}`);
  }

  remove(id: number): Observable<BenhAn> {
    return this.httpClient.delete<BenhAn>(`${API_URL}/benhAns/${id}`);
  }

  edit(id: number, benhAn: BenhAn): Observable<BenhAn> {
    return this.httpClient.put<BenhAn>(`${API_URL}/benhAns/${id}`, benhAn);
  }
}
