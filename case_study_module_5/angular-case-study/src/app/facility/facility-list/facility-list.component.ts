import {Component, OnInit} from '@angular/core';
import {Facility} from '../../module/facility';
import {FacilityService} from '../../service/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  valueD = [];
  facilityList: Facility[] = [];
  facilityS: Facility[] = [];
  facilityById: Facility;
  facilityType = 0;

  constructor(private facility: FacilityService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.facilityById = this.facility.facilityList[0];
    this.facilityS = this.facility.getAll();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityType = +paramMap.get('id');
      this.facilityList = [];
      for (const item of this.facilityS) {
        if (this.facilityType === 0) {
          this.facilityList = this.facilityS;
        } else if (item.facilityType.id === this.facilityType) {
          this.facilityList.push(item);
        }
      }
    });
    // this.facilityType = Number(this.activatedRoute.snapshot.params.id);
  }

  facilityDetail(id: number) {
    this.facilityById = this.facility.getById(id);
  }

  valueDelete(id: number, name: string) {
    this.valueD.push(id);
    this.valueD.push(name);
  }

  deleteFacility(id: number) {
    this.facility.delete(id);
    this.toastr.success('Xoá thông tin thành công', 'Thông Báo');
    this.valueD = [];
    this.facilityList = this.facility.getAll();
    this.router.navigateByUrl('facility/list/0');
  }

  resetModal() {
    this.valueD = [];
  }
}
