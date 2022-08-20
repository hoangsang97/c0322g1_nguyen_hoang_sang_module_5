import {Component, OnInit} from '@angular/core';
import {Customer} from '../../module/customer';
import {CustomerService} from '../../service/customer.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  valueDelete = [];
  customerList: Customer[] = [];

  constructor(private customerService: CustomerService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
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
      this.valueDelete = [];
    });
  }
}
