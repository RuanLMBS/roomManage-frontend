import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SpaceService } from '../../services/space.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit{
  apprRequests:any[] = []

  constructor(private authService: AuthService, private spaceService:SpaceService) {}
 
  ngOnInit(): void {
    this.loadApprovedRequests();
  }
  loadApprovedRequests() {
    this.spaceService.getRequests().subscribe(
        data=> {
          this.apprRequests = data.filter((request:any) => request.status === 'APROVADO');
      },
      error => {
        console.log("Erro ao buscar solicitações do usuário!",error)
      }
    )
  }
}
