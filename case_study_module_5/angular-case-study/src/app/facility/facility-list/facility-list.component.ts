import {Component, OnInit} from '@angular/core';
import {Facility} from '../../module/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];

  constructor(private facility: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityList = this.facility.getAll();
  }

}
