import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {
  name: '';
  constructor() { }

  ngOnInit(): void {
  }

  // showEvent(event) {
  //   this.name = event.target.value;
  // }
}
