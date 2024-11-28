import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../services/space.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-spaces',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './manage-spaces.component.html',
  styleUrl: './manage-spaces.component.css'
})
export class ManageSpacesComponent implements OnInit{
  spaces:any = [];

  constructor(private spaceService:SpaceService, private router:Router) {}

  ngOnInit(): void {
    this.loadSpaces()
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
/*
  toggleSpaceAvailability(space:any) {
     // Cria um novo objeto com a nova disponibilidade
     const newAvailability = !space.isAvailable; // Inverte o estado atual
     const updatedSpace = { ...space, isAvailable: newAvailability }; // Atualiza o objeto
 
     this.spaceService.setAvaibility(space.id, updatedSpace).subscribe(
         () => {
             space.isAvailable = newAvailability; // Atualiza o espaço no frontend
             alert("Disponibilidade alterada com sucesso!");
         },
         error => {
             alert("Não foi possível alterar!");
             console.error("Erro ao alterar disponibilidade:", error); // Log detalhado do erro
         }
     );
  }

  toggleSpaceActivity(space:any) {
    // Cria um novo objeto com a nova disponibilidade
    const newActivity = !space.isActive; // Inverte o estado atual
    const updatedSpace = { ...space, isActive: newActivity }; // Atualiza o objeto

    this.spaceService.setActivity(space.id, updatedSpace).subscribe(
        () => {
            space.isActive = newActivity; // Atualiza o espaço no frontend
            alert("Status alterada com sucesso!");
        },
        error => {
            alert("Não foi possível alterar!");
            console.error("Erro ao alterar Status:", error); // Log detalhado do erro
        }
    );
 }*/

  deleteSpace(space:any) {
    this.spaceService.deleteSpace(space.id).subscribe(
      ()=>{
        alert("Espaço deletado!")
        this.router.navigate(['/home'])
      },
      error => {
        alert("Não foi possível alterar!")
        console.error(error);
      }
    )
  }

}
