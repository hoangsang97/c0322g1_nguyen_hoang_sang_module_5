import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../module/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../module/customer-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer: Customer;
  customerUpdateForm: FormGroup;
  customerTypeList: CustomerType[] = [];
  id: number;
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
      {
        type: 'pattern',
        message: 'Vui lòng nhập số địa thoại đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx'
      }
    ],
    idCard: [
      {type: 'required', message: 'Vui lòng nhập CMND'},
      {type: 'pattern', message: 'Vui lòng nhập số địa thoại đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9).'}
    ],
    email: [
      {type: 'required', message: 'Vui lòng nhập email'},
      {type: 'pattern', message: 'Vui lòng nhập email đúng định dạng abcabc@abc.abc'}
    ]
  };

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.customerTypeList;
    this.customerUpdateForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')
      ]),
      gender: new FormControl(false),
      dateOfBirth: new FormControl('', [
        Validators.required
      ]),
      idCard: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{9,11}')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([\+84]|[\+091]|[\+090])[0-9]{9,11}$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')
      ]),
      address: new FormControl(),
      customerType: new FormControl()
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  getCustomer(id) {
    this.customerService.findById(id).subscribe(customer => {
      this.customerUpdateForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')
        ]),
        gender: new FormControl(false),
        dateOfBirth: new FormControl('', [
          Validators.required
        ]),
        idCard: new FormControl('', [
          Validators.required,
          Validators.pattern('[0-9]{9,11}')
        ]),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(/^([\+84]|[\+091]|[\+090])[0-9]{9,11}$/)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}')
        ]),
        address: new FormControl(),
        customerType: new FormControl()
      });
      this.customerUpdateForm.patchValue(customer);
      this.customerUpdateForm.patchValue({customerType: customer.customerType.id});
    });
  }

  updateSubmit(id) {
    const customer = this.customerUpdateForm.value;
    this.customerService.editCustomer(id, customer).subscribe(() => {
      this.router.navigate(['../customer/list']);
      this.toastr.success('Sửa Thông Tin Thành Công !', 'Thông Báo!');
    });
  }
}
