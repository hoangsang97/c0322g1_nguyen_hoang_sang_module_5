import {Component, OnInit} from '@angular/core';
import {Facility} from '../../module/facility';
import {RentType} from '../../module/rent-type';
import {FacilityType} from '../../module/facility-type';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];

  constructor() {
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
      rentType: {id: 1, name: 'year'},
      facilityType: {id: 1, name: 'Villa'}
    }, {
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
      rentType: {id: 1, name: 'year'},
      facilityType: {id: 1, name: 'Villa'}
    }, {
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
      rentType: {id: 1, name: 'year'},
      facilityType: {id: 1, name: 'Villa'}
    }, {
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
      rentType: {id: 1, name: 'year'},
      facilityType: {id: 1, name: 'Villa'}
    });
  }

  ngOnInit(): void {
  }

}
