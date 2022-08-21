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
  facilityById: Facility = {
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
    rentType: {
      id: 1,
      name: 'year'
    },
    facilityType: {
      id: 1,
      name: 'Villa'
    }
  };
  facilityType = 0;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityType = +paramMap.get('id');
      this.facilityService.getAll().subscribe(facility => {
        this.facilityS = facility;
        this.facilityList = [];
        for (const item of this.facilityS) {
          if (this.facilityType === 0) {
            this.facilityList = this.facilityS;
          } else if (item.facilityType.id === this.facilityType) {
            this.facilityList.push(item);
          }
        }
      });
    });
    // this.facilityType = Number(this.activatedRoute.snapshot.params.id);
  }
  getFacility(id) {
    this.facilityService.getById(id).subscribe(facility => {
      this.facilityById = facility;
    });
  }

  facilityDetail(id: number) {
    this.getFacility(id);
  }

  valueDelete(id: number, name: string) {
    this.valueD.push(id);
    this.valueD.push(name);
  }

  deleteFacility(id: number) {
    this.facilityService.delete(id).subscribe(() => {
      this.valueD = [];
      this.facilityService.getAll().subscribe(facility => {
        this.facilityList = facility;
      });
      this.router.navigateByUrl('facility/list/0');
      this.toastr.success('Xoá thông tin thành công', 'Thông Báo');
    });
  }

  resetModal() {
    this.valueD = [];
  }
}
