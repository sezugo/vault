import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';
import { LoginDTO } from '../model/logindto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlBase: string = environment.urlBase

  constructor( private http: HttpClient) { }


  login(loginDTO: LoginDTO){

    const url = `${this.urlBase}/auth/login`;  
  

    return this.http.post(url, loginDTO)
    //return this.http.post<AuthResponse>('/auth/login', body)
  }

  
}
