import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from '@angular/forms';
import {CustomerType} from '../../module/customer-type';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  validationMessages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên'},
      {type: 'pattern', message: 'Vui lòng nhập tên đúng'}
    ],
    dateOfBirth: [
      {type: 'required', message: 'Vui lòng nhập ngày sinh'},
    ],
    phoneNumber: [
      {type: 'required', message: 'Vui lòng nhập số điện thoại'},
      // tslint:disable-next-line:max-line-length
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx'}
    ],
    idCard: [
      {type: 'required', message: 'Vui lòng nhập CMND'},
      // tslint:disable-next-line:max-line-length
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9).'}
    ],
    email: [
      {type: 'required', message: 'Vui lòng nhập email'},
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng abcabc@abc.abc'}
    ]
  };

  constructor(private customerService: CustomerService, private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    this.customerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')
      ]),
      gender: new FormControl(false),
      dateOfBirth: new FormControl('', [
        Validators.required,
        Validators.pattern('^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$')
      ]),
      idCard: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?(0|[1-9]\\d*)?$')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?(0|[1-9]\\d*)?$')
      ]),
      email: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line:max-line-length
        Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')
      ]),
      address: new FormControl(),
      customerType: new FormControl(1)
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
  }

  getAllCustomerType() {
    this.customerTypeList = this.customerTypeService.customerTypeList;
  }
}
