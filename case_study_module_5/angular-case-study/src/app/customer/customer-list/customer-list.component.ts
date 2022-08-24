import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../customer.service';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../module/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  valueDelete = [];
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  p = 1;
  searchForm: FormGroup;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    this.customerTypeList = this.customerTypeService.customerTypeList;
    this.searchForm = new FormGroup({
      nameSearch: new FormControl(),
      customerTypeId: new FormControl()
    });
    this.searchForm.patchValue({customerTypeId: 0});
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => this.customerList = customers);
  }

  elementDelete(id: number, name: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(name);
    return this.valueDelete;
  }

  resetModal() {
    this.valueDelete = [];
  }

  deleteCustomer(id: number) {
    this.customerService.removeCustomer(id).subscribe(() => {
      this.toastr.success('Xoá thông tin thành công', 'Thông báo!');
      this.getAll();
      this.valueDelete = [];
    });
  }

  search() {
    const nameSearch = this.searchForm.value;
    this.customerService.search(nameSearch.nameSearch, nameSearch.customerTypeId).subscribe(customers => {
      this.customerList = customers;
    });
  }
}
