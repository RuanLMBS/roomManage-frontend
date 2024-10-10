import { Component } from '@angular/core';
import { LogarComponent } from "./logar/logar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
