import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  userId: number = 0;
  userData: any = {};
  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.userId=+this.route.snapshot.paramMap.get('id')!; 
  }

  loadUser() {
    this.userService.getUser(this.userId).subscribe(
      response=> {
        this.userData = response;
      },
      error => {
        console.error("Erro ao carregar o usuário: ",error);
      }
    )
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userData).subscribe(
      response => {
        console.log('Usuário atualizado com sucesso:', response);
        this.router.navigate(['/manageusers']);
      },
      error => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
  }

}
