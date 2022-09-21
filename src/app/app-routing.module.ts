import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' ,canActivate:[AuthGuard] , component:HomeComponent},
  {path:'movies' ,canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'people' ,canActivate:[AuthGuard] , component:PeopleComponent},
  {path:'tv' ,canActivate:[AuthGuard] , component:TvComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent},
  {path:'settings' , loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule)},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
