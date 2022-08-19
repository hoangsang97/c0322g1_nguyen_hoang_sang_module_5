import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../module/customer';
import {Facility} from '../../module/facility';
import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router,
              private toastr: ToastrService) {
    this.customerList = this.customerService.customerList;
    this.facilityList = this.facilityService.facilityList;
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      id: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl(),
      deposit: new FormControl(),
      customer: new FormControl(1),
      facility: new FormControl(1),
    });
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.save(contract);
    this.router.navigateByUrl('contract/list');
    this.toastr.success('Thêm mới thông tin thành công', 'Thông Báo!');
  }
}
