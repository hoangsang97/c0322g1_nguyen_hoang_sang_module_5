import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RentType} from '../../module/rent-type';
import {FacilityType} from '../../module/facility-type';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Facility} from '../../module/facility';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  facilityForm: FormGroup;
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  facility: Facility;
  facilityTypeId = '';
  constructor(private rentType: RentTypeService,
              private facilityType: FacilityTypeService,
              private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) {
    this.rentTypeList = rentType.rentTypeList;
    this.facilityTypeList = facilityType.facilityTypeList; }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      maxPeople: new FormControl(),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl(),
      rentType: new FormControl(),
      facilityType: new FormControl(),
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.facilityTypeId = paramMap.get('id');
      this.facility = this.facilityService.getById(id);
      this.facilityForm.patchValue(this.facility);
      this.facilityForm.patchValue({facilityType: this.facility.facilityType.id});
      this.facilityForm.patchValue({rentType: this.facility.rentType.id});
    });
  }
  selFacility(event) {
    this.facilityTypeId = event.target.value;
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.edit(facility);
    this.router.navigateByUrl('facility/list/0');
    this.toastr.success('Sửa thông tin thành công', 'Thông Báo!');
  }
}
