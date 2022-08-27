import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MaBenhNhan} from '../module/ma-benh-nhan';

const API_URL = `${environment.API_URl}`;
@Injectable({
  providedIn: 'root'
})
export class MaBenhNhanService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MaBenhNhan[]> {
    return this.httpClient.get<MaBenhNhan[]>(API_URL + '/patients');
  }
}
