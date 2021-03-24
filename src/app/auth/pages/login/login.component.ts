import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginDTO } from '../../model/logindto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  controlAcceso = "Ok";
  controlDenegado = " ";



  formLogin: FormGroup = this.fb.group({
    email: ['spidy@gmail.com',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(2)]]
  });


  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.formLogin.value.email);
    console.log(this.formLogin.valid);
    //this.router.navigateByUrl('/dashboard');
    const {email, password} = this.formLogin.value;
    const loginDTO: LoginDTO = {
      email, password
    }
    this.authService.login(loginDTO).subscribe( res => {
      console.log(res)
    });
  }


}
