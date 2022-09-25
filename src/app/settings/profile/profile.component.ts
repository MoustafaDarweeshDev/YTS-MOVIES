import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLogin=false
  userInfo:any
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.userData.subscribe({
      next:(res)=>{
        if(this.auth.userData.getValue() != null){
          this.userInfo = res
          this.isLogin = true
        }else{
          this.isLogin = false
        }
      }
    })
  }

}
