import { Component } from '@angular/core';

@Component({
  templateUrl: './word.component.html',
  selector: 'app-word',
  styleUrls: [`./word.component.css`]
})

export class WordComponent {
  en = 'hello';
  vn = 'xin chao';
  imageUrl = 'https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg';
  forgot = false;

  toggleForgot() {
    this.forgot = !this.forgot;
  }
}
