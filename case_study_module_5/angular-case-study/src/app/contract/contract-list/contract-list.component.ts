import { Component, OnInit } from '@angular/core';
import {Contract} from '../../module/contract';
import {ContractService} from '../../service/contract.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  valueDelete = [];
  constructor(private contractService: ContractService,
              private toastr: ToastrService) {
    this.contractList = this.contractService.contractList;
  }

  ngOnInit(): void {
  }

  elementDelete(id: number, name: string) {
    this.valueDelete.push(id);
    this.valueDelete.push(name);
  }

  deleteContract(id) {
    this.contractService.delete(id);
    this.toastr.success('Xóa thông tin thành công', 'Thông Báo!');
    this.valueDelete = [];
  }

  resetModal() {
    this.valueDelete = [];
  }
}
