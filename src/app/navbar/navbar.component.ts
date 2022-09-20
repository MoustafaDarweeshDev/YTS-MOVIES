import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private auth:AuthService) { }
  isLogin=false
  userInfo:any

  ngOnInit(): void {
    this.auth.userData.subscribe({
      next:()=>{
        if(this.auth.userData.getValue() != null){
          this.userInfo = this.auth.userData.getValue()
          console.log(this.userInfo)
          this.isLogin = true
        }else{
          this.isLogin=false
        }
      }
    })

  }
  logOut(){
    this.auth.logOut()
  }
}
