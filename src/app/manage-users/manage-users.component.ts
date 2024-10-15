import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit{
  users: any[] = [];
  errorMessage: string = '';

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data)=> {
        this.users = data;
      }, 
      error: (error) => {
        console.error('Erro ao obter usuários', error)
        this.errorMessage = 'Erro ao obter a lista de usuários!'
      }
    })
  }

  toggleUserStatus(user:any) {
    if(user.isActive) {
      this.userService.deactivateUser(user.id, user).subscribe(
        response=> {
          user.isActive = false;
          console.log ("Usuário desativado! ", response)
        }, 
        error => {
          console.error("Erro ao desativar o usuário!", error)
          this.errorMessage = 'Erro ao desativar o usuário!'
        }
      )
    } else {
      this.userService.activateUser(user.id, user).subscribe(
        response=> {
          user.isActive = true;
          console.log ("Usuário ativado! ", response)
        }, 
        error => {
          console.error("Erro ao ativar o usuário!", error)
          this.errorMessage = 'Erro ao ativar o usuário!'
        }
      )
    }
  }
}
