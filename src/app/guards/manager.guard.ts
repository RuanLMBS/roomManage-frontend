import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';


export const managerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRole = authService.getUserRole();

  if(userRole==='manager') {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }};
