import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  role: string = 'TEACHER';

  constructor(private registerService:RegisterService, private router:Router) {}

  onSubmit() {
    const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role
    }
    
    this.registerService.register(userData).subscribe({
      next:(response) => {
        console.log("Registro bem sucedido", response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log("Erro no registro!", error)
      }
    })
  }
}
