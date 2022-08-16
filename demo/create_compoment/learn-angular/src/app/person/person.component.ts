import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  name = '';
  age = 0;
  person = [{id: 1, name: 'nguyen van a', age: 18},
    {id: 2, name: 'nguyen van b', age: 19}];
  addNewPerson() {
    this.person.unshift({id: this.person.length + 1, name: this.name, age: this.age});
  }
  constructor() { }

  ngOnInit(): void {
  }

  removePerson(id: number) {
    const idRemove = this.person.findIndex(person => person.id === id);
    this.person.splice(idRemove, 1);
  }
}
