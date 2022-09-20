import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg:any
  isloading=false
  constructor(private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null ,[Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.pattern('^[a-zA-Z]{3,8}'), Validators.required]),
  })
  submitloginForm(loginForm:FormGroup){
    this.isloading = true
    if(loginForm.valid){
      this.auth.signIn(loginForm.value).subscribe({
        next:(res)=>{
          if(res.message === 'success'){
            //redirect to home
            localStorage.setItem('userToken' , res.token)
            this.auth.saveUserData()
            this.router.navigate(['/home'])

            this.isloading = false
          }
          else{

            this.errorMsg=res.message

             this.isloading = false
          }
        }
      })
    }
  }
}
