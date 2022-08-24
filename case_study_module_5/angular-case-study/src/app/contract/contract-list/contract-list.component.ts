import {Component, OnInit} from '@angular/core';
import {Contract} from '../../module/contract';
import {ContractService} from '../contract.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  valueDelete = [];
  p = 1;

  constructor(private contractService: ContractService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(contract => {
      this.contractList = contract;
    });
  }

  elementDelete(id: number, name: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(name);
  }

  deleteContract(id: number) {
    this.contractService.delete(id).subscribe(() => {
      this.toastr.success('Xóa thông tin thành công', 'Thông Báo!');
      this.getAll();
      this.valueDelete = [];
    });
  }

  resetModal() {
    this.valueDelete = [];
  }
}
