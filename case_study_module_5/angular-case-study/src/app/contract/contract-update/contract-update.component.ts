import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {ContractService} from '../contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Customer} from '../../module/customer';
import {Facility} from '../../module/facility';
import {checkPoolAreaAndFloors} from '../../validator/checkPoolAreaAndFloors';

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
  validationMessages = {
    startDate: [
      {type: 'required', message: 'Vui lòng nhập ngày bắt đầu'}
    ],
    endDate: [
      {type: 'required', message: 'Vui lòng nhập ngày kết thúc'}
    ]
  };

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
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [checkPoolAreaAndFloors]),
      customer: new FormControl(),
      facility: new FormControl(),
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getContract(this.id);
    });
  }

  getContract(id: number) {
    this.contractService.findById(id).subscribe(contract => {
      this.contractForm = new FormGroup({
        id: new FormControl(),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        deposit: new FormControl('', [checkPoolAreaAndFloors]),
        customer: new FormControl(),
        facility: new FormControl(),
      });
      this.contractForm.patchValue(contract);
      this.customerService.getAll().subscribe(customer => {
        this.customerList = customer;
        for (const item of customer) {
          if (item.id === contract.customer.id) {
            this.contractForm.patchValue({customer: item});
          }
        }
      });
      this.facilityService.getAll().subscribe(facility => {
        this.facilityList = facility;
        for (const item of facility) {
          if (item.id === contract.facility.id) {
            this.contractForm.patchValue({facility: item});
          }
        }
      });
    });
  }

  submit(id: number) {
    const contract = this.contractForm.value;
    this.contractService.edit(id, contract).subscribe(() => {
      this.router.navigateByUrl('contract/list');
      this.toastr.success('Sửa thông tin thành công', 'Thông Báo!');
    });
  }
}
