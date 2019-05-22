import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngMat01';
  note = 3;
  view = false;
  isLoading = false;
  opened = false;

  onLoad() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }
  onClick() {
    this.opened = true;
  }


}
