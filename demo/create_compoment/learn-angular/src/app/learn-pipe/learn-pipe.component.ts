import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date();
  person = {name: 'nguyen van a', age: 18};
  constructor() { }

  ngOnInit(): void {
  }

}
