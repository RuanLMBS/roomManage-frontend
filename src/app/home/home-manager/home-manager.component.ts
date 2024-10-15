import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-manager',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './home-manager.component.html',
  styleUrl: './home-manager.component.css'
})
export class HomeManagerComponent implements OnInit{
  requests:any[] = [];
  apprRequests:any[] = [];

  constructor(private spaceService:SpaceService, private authService:AuthService) {}
  ngOnInit(): void {
    this.loadRequests();
    this.loadApprovedRequests();
  }

  loadRequests() {
    this.spaceService.getFinishedRequests().subscribe(
      response => {
        this.requests = response;
      },
      error => {
        console.error(error);
      }
    )
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

  acceptRequest(requestId: number) {
    const userToken = this.authService.getToken();
    this.spaceService.acceptRequest(requestId, userToken).subscribe(
      (response)=>{
        console.log("Solicitação aprovada", response);
        this.loadRequests();
      },
      error=>{
        console.log("Erro ao aprovar solicitação: ", error)
      }
    )
  }
  rejectRequest(requestId: number) {
    const userToken = this.authService.getToken();
    this.spaceService.rejectRequest(requestId, userToken).subscribe(
      (response)=>{
        console.log("Solicitação recusada", response);
        this.loadRequests();
      },
      error=>{
        console.log("Erro ao recusar solicitação: ", error)
      }
    )
  }




}
