import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {BenhAn} from '../module/benh-an';
import {BenhAnService} from '../service/benh-an.service';
import {MaBenhAnService} from '../service/ma-benh-an.service';
import {MaBenhNhanService} from '../service/ma-benh-nhan.service';
import {MaBenhNhan} from '../module/ma-benh-nhan';
import {MaBenhAn} from '../module/ma-benh-an';
import {checkDate} from '../../validator/checkDate';

@Component({
  selector: 'app-benh-an-update',
  templateUrl: './benh-an-update.component.html',
  styleUrls: ['./benh-an-update.component.css']
})
export class BenhAnUpdateComponent implements OnInit {
  patient: BenhAn;
  patientPersonList: MaBenhNhan[] = [];
  patientCodeList: MaBenhAn[] = [];
  patientUpdateForm: FormGroup = new FormGroup({
    id: new FormControl(''),
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
  id: number;
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

  constructor(private patientService: BenhAnService,
              private patientCodeService: MaBenhAnService,
              private patientPersonService: MaBenhNhanService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPatient(this.id);
    });
  }

  getPatient(id) {
    this.patientService.findById(id).subscribe(patient => {
      this.patientUpdateForm.patchValue(patient);
      this.patientPersonService.getAll().subscribe(patientPerson => {
        this.patientPersonList = patientPerson;
        for (const item of patientPerson) {
          if (item.id === patient.patientPerson.id) {
            this.patientUpdateForm.patchValue({patientPerson: item});
          }
        }
      });
      this.patientCodeService.getAll().subscribe(patientCode => {
        this.patientCodeList = patientCode;
        for (const item of patientCode) {
          if (item.id === patient.patientCode.id) {
            this.patientUpdateForm.patchValue({patientCode: item});
          }
        }
      });
    });
  }

  updateSubmit(id) {
    const patient = this.patientUpdateForm.value;
    this.patientService.edit(id, patient).subscribe(() => {
      this.router.navigate(['../../benhAn/list', 0]);
      this.toastr.success('Sửa Thông Tin Thành Công !', 'Thông Báo!');
    });
  }
}
