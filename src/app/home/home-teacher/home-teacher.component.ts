import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../../services/space.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SpaceRequestService } from '../../services/space-request.service';

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
      requestDate: '',
      userName: '',
      startDate: 0,
      endDate: '',
      status: "",
    }
  };

  constructor(private spaceService:SpaceService, private authService:AuthService, private spaceRequestService:SpaceRequestService){}

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
    this.spaceRequestService.getRequests().subscribe(
        data=> {
          data.forEach((e:any) => {
            if(e.userName == this.userName) {
              this.userRequests.push(e);
            }
          });
          console.log(this.userRequests);
          //this.userRequests = data.filter((request:any) => request.requestedBy.username === this.userName);
      },
      error => {
        console.log("Erro ao buscar solicitações do usuário!",error)
      }
    )
  }

}
