import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { HomeManagerComponent } from "./home-manager/home-manager.component";
import { HomeTeacherComponent } from "./home-teacher/home-teacher.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule, HomeAdminComponent, HomeManagerComponent, HomeTeacherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userRole: string | null;
  
  constructor(private authService:AuthService, private router:Router){
    this.userRole = this.authService.getUserRole();
  };
  
  logout() {
    console.log(this.authService.logout())
    this.router.navigate(["/login"]);
  }
}
