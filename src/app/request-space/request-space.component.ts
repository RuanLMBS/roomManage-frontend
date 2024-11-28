import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceService } from '../services/space.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SpaceRequestService } from '../services/space-request.service';


@Component({
  selector: 'app-request-space',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './request-space.component.html',
  styleUrl: './request-space.component.css'
})
export class RequestSpaceComponent implements OnInit{
  space:any = {
    id:0,
    name:'',
    location:'',
    capacity:0,
    type:"SALA_AULA",
    resources: []
  }

  startDate: string = '';
  endDate: string = '';
  username: any = '';

  constructor(private spaceRequestService:SpaceRequestService, 
              private router:Router, 
              private route: ActivatedRoute,
              private authService:AuthService,
              private spaceService:SpaceService) {}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
        this.spaceService.getSpaces().subscribe({
          next: (data)=> {
            data.forEach((e: any) => {
             if(e.id==id) {
                this.space = e;
              }
            });
          }, 
          error: (error) => {
            console.error('Erro ao obter Espaços', error)
          }
      
  })
        this.username = this.authService.getUserName();
      
  }
  onSubmit(): void {
    const spaceRequestDTO = {
      userName: this.username,
      spaceName: this.space.name,
      startDate: this.startDate,
      endDate: this.endDate
    };
    const userToken:any = this.authService.getToken();
    this.spaceRequestService.requestSpace(spaceRequestDTO,userToken).subscribe(
      () => {
        alert('Solicitação enviada com sucesso!');
        this.router.navigate(['/home']); // Redireciona para uma página de sucesso, ajuste conforme necessário
      },
      (error) => {
        console.error('Erro ao enviar solicitação:', error);
        alert('Não foi possível enviar a solicitação.');
      }
    ); 
  }
}
