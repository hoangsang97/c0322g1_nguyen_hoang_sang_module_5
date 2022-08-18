import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {RentType} from '../../module/rent-type';
import {FacilityType} from '../../module/facility-type';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facilityTypeId = '0: 1';

  constructor(private rentType: RentTypeService,
              private facilityType: FacilityTypeService,
              private facility: FacilityService,
              private router: Router,
              private toastr: ToastrService) {
    this.rentTypeList = rentType.rentTypeList;
    this.facilityTypeList = facilityType.facilityTypeList;
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      name: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      maxPeople: new FormControl(),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl(),
      rentType: new FormControl(1),
      facilityType: new FormControl(1),
    });
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facility.save(facility);
    this.router.navigate(['../facility/list/0']);
    this.toastr.success('Thêm mới thông tin thành công', 'Thông Báo!');
  }

  selFacility(event) {
    this.facilityTypeId = event.target.value;
    console.log(this.facilityTypeId);
  }
}
