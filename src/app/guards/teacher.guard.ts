import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const teacherGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRole = authService.getUserRole();

  if(userRole==='teacher') {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
