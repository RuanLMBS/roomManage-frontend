import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-teacher',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './home-teacher.component.html',
  styleUrl: './home-teacher.component.css'
})
export class HomeTeacherComponent implements OnInit{

  userName:any=0;
  userRequests:any[]=[];
  spaces:any = [];

  spaceRequest: any = {
    space: {
      id: 0,
      name: '',
      location: '',
      capacity: 0,
      type: '',
      isAvailable: true,
      isActive: true,
      resources: []
    },
    startDate: '',
    endDate: ''
  };

  constructor(private spaceService:SpaceService, private authService:AuthService){}

  ngOnInit(): void {
    this.loadSpaces();
    this.userName = this.authService.getUserName();
    this.loadRequests();
  }

  loadSpaces() {
    this.spaceService.getSpaces().subscribe(
      response => {
        this.spaces = response;
      },
      error => {
        console.error(error);
      }
    )
  }

  loadRequests() {
    this.spaceService.getRequests().subscribe(
        data=> {
          this.userRequests = data.filter((request:any) => request.requestedBy.username === this.userName);
      },
      error => {
        console.log("Erro ao buscar solicitações do usuário!",error)
      }
    )
  }

}
