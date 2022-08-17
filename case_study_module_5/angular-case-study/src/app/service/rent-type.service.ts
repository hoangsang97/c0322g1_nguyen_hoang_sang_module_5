import { Injectable } from '@angular/core';
import {RentType} from '../module/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeList: RentType[] = [];
  constructor() {
    this.rentTypeList.push({
      id: 1,
      name: 'year'
    }, {
      id: 2,
      name: 'month'
    }, {
      id: 3,
      name: 'day'
    }, {
      id: 4,
      name: 'hour'
    });
  }
}
