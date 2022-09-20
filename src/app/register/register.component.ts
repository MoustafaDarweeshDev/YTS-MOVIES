import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg:any
  isloading=false
  constructor(private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null ,[Validators.minLength(3),Validators.maxLength(10), Validators.required]),
    last_name:new FormControl(null ,[Validators.minLength(3),Validators.maxLength(10), Validators.required]),
    age:new FormControl(null ,[Validators.min(16) ,Validators.required]),
    email:new FormControl(null ,[Validators.email ,Validators.required]),
    password:new FormControl(null ,[Validators.pattern('^[a-zA-Z]{3,8}'), Validators.required]),
  })
  submitRegisterForm(registerForm:FormGroup){
    this.isloading = true
    if(registerForm.valid){
      this.auth.signUp(registerForm.value).subscribe({
        next:(res)=>{
          if(res.message === 'success'){
            //redirect to home
            this.router.navigate(['/login'])
            console.log("tmam");

            this.isloading = false
          }
          else{
            //show error
            console.log("nope");
            this.errorMsg=res.message

             this.isloading = false
          }
        }
      })
    }
  }

}
