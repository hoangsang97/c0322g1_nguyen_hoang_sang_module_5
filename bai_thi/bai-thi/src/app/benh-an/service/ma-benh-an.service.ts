import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MaBenhAn} from '../module/ma-benh-an';

const API_URL = `${environment.API_URl}`;
@Injectable({
  providedIn: 'root'
})
export class MaBenhAnService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<MaBenhAn[]> {
    return this.httpClient.get<MaBenhAn[]>(API_URL + '/patients');
  }
}
