import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DesignGuard implements CanActivateChild, CanLoad {
  constructor(private loginService: LoginService) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.isLoggedIn;
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoggedIn && this.loginService.isAdmin;
  }
  
}
