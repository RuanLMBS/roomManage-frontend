import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceService } from '../services/space.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-spaces',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-spaces.component.html',
  styleUrl: './register-spaces.component.css'
})
export class RegisterSpacesComponent {
  spaceData: {
    location: string;
    name: string;
    capacity: number;
    type: string;
    resources: string[];  
  } = {
    location: '',
    name: '',
    capacity: 0,
    type: 'SALA_AULA',
    resources: []  
  };
  resourcesInput: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private spaceService:SpaceService, private router:Router) {}

  onSubmit() {
    this.spaceData.resources = this.resourcesInput.split(',').map(resource => resource.trim());
    this.spaceService.createSpace(this.spaceData).subscribe(
      response => {
        alert("Espaço criado com sucesso!")
        this.successMessage = 'Espaço criado com sucesso!'
        this.errorMessage = null;
        this.clearForm();
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage = 'Não foi possível criar o espaço!'
        this.successMessage = null;
      }
    )
  }

  clearForm() {
    this.spaceData = {
      location: '',
      name: '',
      capacity: 0,
      type: 'SALA_AULA',
      resources: []
    };
    this.resourcesInput = '';
  }
}
