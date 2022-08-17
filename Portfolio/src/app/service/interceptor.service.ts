import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogInService } from 'src/app/service/log-in.service'


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private logInService:LogInService ) { }

  intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
    
    var currentUser=this.logInService.UsuarioAutenticado;
    if(currentUser && currentUser.accesToken)
    {
      req=req.clone({
        setHeaders:{
          Authorization:'Bearer ${currentUser.accesToken}'
        }
    })
  }
  console.log("Interceptor está corriendo " + JSON.stringify(currentUser));
  return next.handle(req);
}
}
