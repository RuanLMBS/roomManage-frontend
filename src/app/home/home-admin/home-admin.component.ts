import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SpaceService } from '../../services/space.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpaceRequestService } from '../../services/space-request.service';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit{
  apprRequests:any[] = []

  constructor(private authService: AuthService, private spaceService:SpaceService, private spaceRequestService:SpaceRequestService) {}
 
  ngOnInit(): void {
    this.loadApprovedRequests();
  }

  
  loadApprovedRequests() {
    this.spaceRequestService.getRequests().subscribe(
      response => {
        response.forEach((e:any) => {
          if(e.status === 'APROVADO') {
            this.apprRequests.push(e);
          } 
        });
      },
      error => {
        console.error(error);
      }
    )
  }
}
