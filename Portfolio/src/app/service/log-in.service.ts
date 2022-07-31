import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LogInService {

  apiUrl="http://localhost:8080/auth/login"
  currentUserSubject: BehaviorSubject<any>;
  
  constructor(private http: HttpClient) { 
    console.log("El servicio de autentitación esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.apiUrl, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  CerrarSesion(){
    sessionStorage.removeItem('currentUser');
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }

 
}
