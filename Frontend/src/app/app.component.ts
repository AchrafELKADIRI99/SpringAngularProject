import { Component } from '@angular/core';
import { AuthService } from '../app/service/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService) { }
  title = 'MINI PROJECT';
}
