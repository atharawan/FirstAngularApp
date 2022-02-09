import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome to Angular</h1>
  // <img src="assets/logo.png" />
  // <p>HTML from page {{title}}</p>
  // `,
  styleUrls: ['./app.component.css']
})
export class MyAppComponent {
  title = 'My First Angular App';
}
