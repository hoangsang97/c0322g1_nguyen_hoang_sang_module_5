import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Customer} from '../../module/customer';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../module/customer-type';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerUpdateForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.customerUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      gender: new FormControl(),
      dateOfBirth: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl()
    });
    this.customerTypeList = this.customerTypeService.customerTypeList;
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.customer = this.customerService.findById(id);
      this.customerUpdateForm.patchValue(this.customer);
      this.customerUpdateForm.patchValue({customerType: this.customer.customerType.id});
    });
  }

  updateSubmit() {
    const customer = this.customerUpdateForm.value;
    this.customerService.editCustomer(customer);
  }
}
