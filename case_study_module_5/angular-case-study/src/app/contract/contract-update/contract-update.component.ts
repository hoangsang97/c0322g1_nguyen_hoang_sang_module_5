import {Component, OnInit} from '@angular/core';
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
  id: number;

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router,
              private toastr: ToastrService,
              private activatedRoute: ActivatedRoute) {
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
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getContract(this.id);
    });
  }

  getContract(id) {
    this.contractService.findById(id).subscribe(contract => {
      this.contractForm = new FormGroup({
        id: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        deposit: new FormControl(),
        customer: new FormControl(),
        facility: new FormControl(),
      });
      this.contractForm.patchValue(contract);
      this.customerService.getAll().subscribe(customer => {
        this.customerList = customer;
        this.contractForm.patchValue({customer: this.customerList[contract.customer.id - 1]});
      });
      this.facilityService.getAll().subscribe(facility => {
        this.facilityList = facility;
        this.contractForm.patchValue({facility: this.facilityList[contract.facility.id - 1]});
      });
    });
  }

  submit(id) {
    const contract = this.contractForm.value;
    this.contractService.edit(id, contract).subscribe(() => {
      this.router.navigateByUrl('contract/list');
      this.toastr.success('Sửa thông tin thành công', 'Thông Báo!');
    });
  }
}
