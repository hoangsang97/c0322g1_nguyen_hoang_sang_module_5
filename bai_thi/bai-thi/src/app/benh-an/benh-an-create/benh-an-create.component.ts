import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {checkDate} from '../../validator/checkDate';
import {MaBenhAn} from '../module/ma-benh-an';
import {MaBenhAnService} from '../service/ma-benh-an.service';
import {MaBenhNhanService} from '../service/ma-benh-nhan.service';
import {MaBenhNhan} from '../module/ma-benh-nhan';
import {BenhAnService} from '../service/benh-an.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-benh-an-create',
  templateUrl: './benh-an-create.component.html',
  styleUrls: ['./benh-an-create.component.css']
})
export class BenhAnCreateComponent implements OnInit {
  patientCreateForm: FormGroup = new FormGroup({
    patientCode: new FormControl(''),
    patientPerson: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')
    ]),
    hospitalized: new FormControl('', [
      Validators.required
    ]),
    discharge: new FormControl('', [
      Validators.required,
      checkDate
    ]),
    reason: new FormControl('', [
      Validators.required
    ]),
    cure: new FormControl('', [
      Validators.required
    ]),
    doctor: new FormControl('', [
      Validators.required
    ])
  });
  validationMessages = {
    name: [
      {type: 'required', message: 'Vui lòng nhập tên bệnh nhân'},
      {type: 'pattern', message: 'Vui lòng nhập tên không chứa ký tự số'}
    ],
    hospitalized: [
      {type: 'required', message: 'Vui lòng nhập ngày nhập viện'},
    ],
    discharge: [
      {type: 'required', message: 'Vui lòng nhập ngày ra viện'},
    ],
    reason: [
      {type: 'required', message: 'Vui lòng nhập lý do nhập viện'},
    ],
    cure: [
      {type: 'required', message: 'Vui lòng nhập phương pháp'},
    ],
    doctor: [
      {type: 'required', message: 'Vui lòng nhập tên bác sĩ'},
    ]
  };
  patientCodeList: MaBenhAn[] = [];
  patientPersonList: MaBenhNhan[] = [];

  constructor(private patientCodeService: MaBenhAnService,
              private patientPersonService: MaBenhNhanService,
              private router: Router,
              private patientService: BenhAnService,
              private toastr: ToastrService) {
    this.patientCodeService.getAll().subscribe(patientCodes => {
      this.patientCodeList = patientCodes;
      this.patientCreateForm.patchValue({patientCode: patientCodes[0]});
    });
    this.patientPersonService.getAll().subscribe(patientPersons => {
      this.patientPersonList = patientPersons;
      this.patientCreateForm.patchValue({patientPerson: patientPersons[0]});
    });
  }

  ngOnInit(): void {
  }

  createSubmit() {
    const patient = this.patientCreateForm.value;
    this.patientService.create(patient).subscribe(() => {
      this.router.navigate(['../../benhAn/list', 0]);
      this.toastr.success('Thêm mới thông tin thành công', 'Thông Báo!');
    });
  }
}
