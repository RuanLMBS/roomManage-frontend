import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceService } from '../services/space.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent implements OnInit{
  pendingRequests:any[]=[];

  constructor(private spaceService:SpaceService, private authService:AuthService, private router:Router) {}
  ngOnInit(): void {
    this.loadPending();
  }

  loadPending() {
    this.spaceService.getRequests().subscribe(
      response => {
        this.pendingRequests = response;
      },
      error => {
        console.error(error);
      }
    )
  }

  acceptRequests(requestId:any) {
    const userToken = this.authService.getToken();
    this.spaceService.acceptRequest(requestId, userToken).subscribe(
      (response)=>{
        alert("Solicitação aceita com sucesso!");
        console.log("Solicitação aprovada", response);
        this.loadPending();
        this.router.navigate(["/home"]);
      },
      error=>{
        alert("Erro ao aprovar solicitação")
        console.log("Erro ao aprovar solicitação: ", error)
      }
    )
  }

  rejectRequests(requestId:any) {
    const userToken = this.authService.getToken();
    this.spaceService.rejectRequest(requestId, userToken).subscribe(
      (response)=>{
        alert("Solicitação recusada com sucesso!")
        console.log("Solicitação recusada", response);
        this.loadPending();
        this.router.navigate(["/home"]);
      },
      error=>{
        alert("Erro ao recusar solicitação")
        console.log("Erro ao recusar solicitação: ", error)
      }
    )
    
  }

}
