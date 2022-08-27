import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BenhAnService} from '../service/benh-an.service';

@Component({
  selector: 'app-benh-an-list',
  templateUrl: './benh-an-list.component.html',
  styleUrls: ['./benh-an-list.component.css']
})
export class BenhAnListComponent implements OnInit {
  valueDelete = [];
  patientList;
  patientId = '';
  name = '';

  constructor(private patientService: BenhAnService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.searchPatient(0);
  }

  getAll(pageable: number) {
    this.patientId = '';
    this.name = '';
    this.patientService.getAll(pageable).subscribe(patients => {
      this.patientList = patients;
    });
  }

  elementDelete(id: number, maBenhAn: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(maBenhAn);
    return this.valueDelete;
  }

  resetModal() {
    this.valueDelete = [];
  }

  delete(id: number) {
    this.patientService.remove(id).subscribe(() => {
      this.toastr.success('Xoá thông tin thành công', 'Thông báo!');
      this.searchPatient(0);
      this.valueDelete = [];
    });
  }

  searchPatient(pageable: number) {
    this.patientId = this.patientId.replace('BN-', '');
    this.patientId = this.patientId.replace('BN', '');
    this.patientId = this.patientId.replace('B', '');
    this.patientId = this.patientId.replace('N-', '');
    this.patientId = this.patientId.replace('N', '');
    if (this.patientId === '' && this.name === '') {
      this.getAll(pageable);
    }
  }
}
