import { Injectable } from '@angular/core';
import {Facility} from '../module/facility';
import {FacilityTypeService} from './facility-type.service';
import {RentTypeService} from './rent-type.service';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];
  constructor(private facilityType: FacilityTypeService,
              private rentType: RentTypeService) {
    this.facilityList.push({
      id: 1,
      name: 'Villa Beach Front',
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: 'Có Điện Thoại',
      rentType: rentType.rentTypeList[1],
      facilityType: facilityType.facilityTypeList[0]
    }, {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      poolArea: 0,
      numberOfFloors: 3,
      facilityFree: 'Có Ti Vi',
      rentType: rentType.rentTypeList[3],
      facilityType: facilityType.facilityTypeList[1]
    }, {
      id: 3,
      name: 'Room Twin 01',
      area: 5000,
      cost: 1000000,
      maxPeople: 2,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có tivi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: 'Có Điện Thoại',
      rentType: rentType.rentTypeList[1],
      facilityType: facilityType.facilityTypeList[2]
    }, {
      id: 4,
      name: 'Villa Beach Front',
      area: 25000,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: 'Có Điện Thoại',
      rentType: rentType.rentTypeList[3],
      facilityType: facilityType.facilityTypeList[0]
    });
  }
  getAll() {
    return this.facilityList;
  }
  save(facility) {
    facility.id = this.facilityList.length + 1;
    if (facility.rentType === 1) {
      facility.rentType = this.rentType.rentTypeList[0];
    } else if (facility.rentType === 2) {
      facility.rentType = this.rentType.rentTypeList[1];
    } else if (facility.rentType === 3) {
      facility.rentType = this.rentType.rentTypeList[2];
    } else if (facility.rentType === 4) {
      facility.rentType = this.rentType.rentTypeList[3];
    }
    if (facility.facilityType === 1) {
      facility.facilityType = this.facilityType.facilityTypeList[0];
    } else if (facility.facilityType === 2) {
      facility.facilityType = this.facilityType.facilityTypeList[1];
    } else if (facility.facilityType === 3) {
      facility.facilityType = this.facilityType.facilityTypeList[2];
    }
    this.facilityList.push(facility);
  }
  getById(id) {
    for (const item of this.facilityList) {
      if (item.id === id) {
        return item;
      }
    }
  }
  edit(facility) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === facility.id) {
        if (this.facilityList[i].facilityType.id === 1) {
          facility.facilityFree = null;
        } else if (this.facilityList[i].facilityType.id === 2) {
          facility.poolArea = 0;
          facility.facilityFree = null;
        } else if (this.facilityList[i].facilityType.id === 3) {
          facility.standardRoom = 0;
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
