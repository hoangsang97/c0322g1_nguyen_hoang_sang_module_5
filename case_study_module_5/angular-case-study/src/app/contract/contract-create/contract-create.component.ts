import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../module/customer';
import {Facility} from '../../module/facility';
import {FacilityService} from '../../service/facility.service';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Contract} from '../../module/contract';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  contract: Contract;

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router,
              private toastr: ToastrService) {
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
    });
    this.facilityService.getAll().subscribe(facility => {
      this.facilityList = facility;
    });
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
    this.customerService.getAll().subscribe(customer => {
      this.customerList = customer;
      this.contractForm.patchValue({customer: this.customerList[0]});
    });
    this.facilityService.getAll().subscribe(facility => {
      this.facilityList = facility;
      this.contractForm.patchValue({facility: this.facilityList[0]});
    });
  }

  submit() {
    this.contract = this.contractForm.value;
    this.contractService.save(this.contract).subscribe(() => {
      this.router.navigateByUrl('contract/list');
      this.toastr.success('Thêm mới thông tin thành công', 'Thông Báo!');
    });
  }
}
