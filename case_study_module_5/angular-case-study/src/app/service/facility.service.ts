import {Injectable} from '@angular/core';
import {Facility} from '../module/facility';
import {FacilityTypeService} from './facility-type.service';
import {RentTypeService} from './rent-type.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];

  constructor(private facilityType: FacilityTypeService,
              private rentType: RentTypeService,
              private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(API_URL + '/facility');
  }

  save(facility) {
    facility.id = this.facilityList.length + 1;
    for (const item of this.facilityType.facilityTypeList) {
      if (facility.facilityType === item.id) {
        facility.facilityType = item;
      }
    }
    for (const item of this.rentType.rentTypeList) {
      if (facility.rentType === item.id) {
        facility.rentType = item;
      }
    }
    if (facility.facilityType.id === 1) {
      facility.facilityFree = null;
    } else if (facility.facilityType.id === 2) {
      facility.poolArea = 0;
      facility.facilityFree = null;
    } else if (facility.facilityType.id === 3) {
      facility.standardRoom = null;
      facility.descriptionOtherConvenience = null;
      facility.numberOfFloors = 0;
      facility.poolArea = 0;
    }
    this.facilityList.push(facility);
  }

  getById(id): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL}/facility/${id}`);
  }

  edit(facility) {
    for (const item of this.facilityType.facilityTypeList) {
      if (facility.facilityType === item.id) {
        facility.facilityType = item;
      }
    }
    for (const item of this.rentType.rentTypeList) {
      if (facility.rentType === item.id) {
        facility.rentType = item;
      }
    }
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === facility.id) {
        if (facility.facilityType.id === 1) {
          facility.facilityFree = null;
        } else if (facility.facilityType.id === 2) {
          facility.poolArea = 0;
          facility.facilityFree = null;
        } else if (facility.facilityType.id === 3) {
          facility.standardRoom = null;
          facility.descriptionOtherConvenience = null;
          facility.numberOfFloors = 0;
          facility.poolArea = 0;
        }
        this.facilityList[i] = facility;
      }
    }
  }

  delete(id) {
    const index = this.facilityList.findIndex(facility => facility.id === id);
    this.facilityList.splice(index, 1);
  }
}
