import {Injectable} from '@angular/core';
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

  getById(id) {
    return this.facilityList.find(facility => facility.id === id);
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
