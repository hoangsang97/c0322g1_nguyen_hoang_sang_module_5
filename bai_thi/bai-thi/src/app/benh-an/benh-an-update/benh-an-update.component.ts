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
  benhAn: BenhAn;
  maBenhNhanList: MaBenhNhan[] = [];
  maBenhAnList: MaBenhAn[] = [];
  benhAnUpdateForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    maBenhAn: new FormControl(''),
    maBenhNhan: new FormControl(''),
    tenBenhNhan: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$')
    ]),
    ngayNhapVien: new FormControl('', [
      Validators.required
    ]),
    ngayRaVien: new FormControl('', [
      Validators.required,
      checkDate
    ]),
    lyDoNhapVien: new FormControl('', [
      Validators.required
    ]),
    phuongPhap: new FormControl('', [
      Validators.required
    ]),
    bacSi: new FormControl('', [
      Validators.required
    ])
  });
  id: number;
  validationMessages = {
    tenBenhNhan: [
      {type: 'required', message: 'Vui lòng nhập tên bệnh nhân'},
      {type: 'pattern', message: 'Vui lòng nhập tên không chứa ký tự số'}
    ],
    ngayNhapVien: [
      {type: 'required', message: 'Vui lòng nhập ngày nhập viện'},
    ],
    ngayRaVien: [
      {type: 'required', message: 'Vui lòng nhập ngày ra viện'},
    ],
    lyDoNhapVien: [
      {type: 'required', message: 'Vui lòng nhập lý do nhập viện'},
    ],
    phuongPhap: [
      {type: 'required', message: 'Vui lòng nhập phương pháp'},
    ],
    bacSi: [
      {type: 'required', message: 'Vui lòng nhập tên bác sĩ'},
    ]
  };

  constructor(private benhAnService: BenhAnService,
              private maBenhAnService: MaBenhAnService,
              private maBenhNhanService: MaBenhNhanService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBenhAn(this.id);
    });
  }

  getBenhAn(id) {
    this.benhAnService.findById(id).subscribe(benhAn => {
      this.benhAnUpdateForm.patchValue(benhAn);
      this.maBenhNhanService.getAll().subscribe(maBenhNhan => {
        this.maBenhNhanList = maBenhNhan;
        for (const item of maBenhNhan) {
          if (item.id === benhAn.maBenhNhan.id) {
            this.benhAnUpdateForm.patchValue({maBenhNhan: item});
          }
        }
      });
      this.maBenhAnService.getAll().subscribe(maBenhAn => {
        this.maBenhAnList = maBenhAn;
        for (const item of maBenhAn) {
          if (item.id === benhAn.maBenhAn.id) {
            this.benhAnUpdateForm.patchValue({maBenhAn: item});
          }
        }
      });
    });
  }

  updateSubmit(id) {
    const benhAn = this.benhAnUpdateForm.value;
    this.benhAnService.edit(id, benhAn).subscribe(() => {
      this.router.navigate(['../benhAn/list']);
      this.toastr.success('Sửa Thông Tin Thành Công !', 'Thông Báo!');
    });
  }
}
