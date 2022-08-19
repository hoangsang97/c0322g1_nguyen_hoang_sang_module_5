import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Customer} from '../../module/customer';
import {Facility} from '../../module/facility';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  contractForm: FormGroup;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) {
    this.customerList = this.customerService.customerList;
    this.facilityList = this.facilityService.facilityList;
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      deposit: new FormControl(),
      customer: new FormControl(),
      facility: new FormControl(),
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      const contract = this.contractService.findById(id);
      this.contractForm.patchValue(contract);
      this.contractForm.patchValue({customer: contract.customer.id});
      this.contractForm.patchValue({facility: contract.facility.id});
    });
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.edit(contract);
    this.router.navigateByUrl('contract/list');
    this.toastr.success('Sửa thông tin thành công', 'Thông Báo!');
  }
}
