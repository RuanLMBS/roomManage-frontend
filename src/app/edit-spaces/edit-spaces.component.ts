import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../services/space.service';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-spaces',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './edit-spaces.component.html',
  styleUrl: './edit-spaces.component.css'
})
export class EditSpacesComponent implements OnInit{
  space:any = {
    id:0,
    name:'',
    location:'',
    capacity:0,
    type:"SALA_AULA",
    resources: []
  }

  constructor(private spaceService:SpaceService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.spaceService.getSpaceById(+id).subscribe(data=>{
        this.space=data;
      })
    }
  }

  onSubmit() {
    this.spaceService.updateSpace(this.space.id, this.space).subscribe(
      ()=>{
        alert("Espaço atualizado com sucesso!")
        this.router.navigate(["/managespaces"])
      },
      error=>{
        alert("Erro ao atualizar o espaço")
        console.log("Erro: ", error)
      }
    )
  }
}
