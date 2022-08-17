import { Injectable } from '@angular/core';
import {FacilityType} from '../module/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypeList: FacilityType[] = [];
  constructor() {
    this.facilityTypeList.push({
      id: 1,
        name: 'Villa'
    }, {
      id: 2,
      name: 'House'
    }, {
      id: 3,
      name: 'Room'
    });
  }
}
