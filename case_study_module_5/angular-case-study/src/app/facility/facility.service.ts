import {Injectable} from '@angular/core';
import {Facility} from '../module/facility';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';
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

  save(facility: Facility) {
    this.setValueFacility(facility);
    return this.httpClient.post<Facility>(`${API_URL}/facility`, facility);
  }

  getById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL}/facility/${id}`);
  }

  edit(id: number, facility: Facility) {
    this.setValueFacility(facility);
    return this.httpClient.put<Facility>(`${API_URL}/facility/${id}`, facility);
  }

  delete(id) {
    return this.httpClient.delete<Facility>(`${API_URL}/facility/${id}`);
  }

  setValueFacility(facility: Facility) {
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
  }
}
