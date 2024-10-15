import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-logar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './logar.component.html',
  styleUrl: './logar.component.css'
})
export class LogarComponent {
  username:string = '';
  password:string = '';
  
  constructor(private authService: AuthService, private router: Router){}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next:(response)=> {
        this.authService.saveToken(response.token);
        this.router.navigate(['/home']);
      },
      error: (err)=>{
        alert("Não foi possível fazer login")
        console.log("Erro no login", err)
      }
    })
  }

  
}
