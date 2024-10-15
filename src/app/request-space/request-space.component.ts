import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceService } from '../services/space.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';


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

  constructor(private spaceService:SpaceService, 
              private router:Router, 
              private route: ActivatedRoute,
              private authService:AuthService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.spaceService.getSpaceById(+id).subscribe(data=>{
        this.space=data;
      })
    }
  }
  onSubmit(): void {
    const spaceRequestDTO = {
      space: this.space,
      startDate: this.startDate,
      endDate: this.endDate
    };
 

    const userToken:any = this.authService.getToken();
    this.spaceService.requestSpace(spaceRequestDTO,userToken).subscribe(
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
