import { Component, OnInit } from '@angular/core';
import {Contract} from '../../module/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [];
  constructor() {
    this.contractList.push({
      id: 1,
      startDate: '2020-12-08',
      endDate: '2020-12-08',
      deposit: 0,
      customer: {id: 1, name: 'Nguyễn Thị Hào'},
      facility: {id: 1, name: 'Villa Beach Front'}
    });
  }

  ngOnInit(): void {
  }

}
