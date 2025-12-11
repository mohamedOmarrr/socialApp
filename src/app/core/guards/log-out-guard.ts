import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../services/log-service';
import { inject } from '@angular/core';


export const logOutGuard: CanActivateFn = (route, state) => {

    const logService = inject(LogService);
  const router = inject(Router);

  const token = logService.getToken()

  if (!token) {
    return router.parseUrl('/signUp')
  }

  return true;
};
