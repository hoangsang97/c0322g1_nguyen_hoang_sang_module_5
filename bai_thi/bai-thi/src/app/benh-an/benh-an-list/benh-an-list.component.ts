import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {BenhAn} from '../module/benh-an';
import {BenhAnService} from '../service/benh-an.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-benh-an-list',
  templateUrl: './benh-an-list.component.html',
  styleUrls: ['./benh-an-list.component.css']
})
export class BenhAnListComponent implements OnInit {
  valueDelete = [];
  benhAnList: BenhAn[] = [];
  p = 1;

  constructor(private benhAnService: BenhAnService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.benhAnService.getAll().subscribe(benhAns => this.benhAnList = benhAns);
  }

  elementDelete(id: number, maBenhAn: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(maBenhAn);
    return this.valueDelete;
  }

  resetModal() {
    this.valueDelete = [];
  }

  deleteCustomer(id: number) {
    this.benhAnService.remove(id).subscribe(() => {
      this.toastr.success('Xoá thông tin thành công', 'Thông báo!');
      this.getAll();
      this.valueDelete = [];
    });
  }
}
