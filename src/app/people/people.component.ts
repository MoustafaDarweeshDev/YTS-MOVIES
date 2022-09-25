import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {


  trendingPeople:any[]=[]
  pages:number[]=[]
  pagesNumber:number=10
  term=' '
  imgPrefix = 'https://image.tmdb.org/t/p/w500'

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages=new Array(this.pagesNumber).fill('').map((x,i)=>i+1)
    this.moviesService.getPersonByPagination(1,).subscribe({
      next:(res)=>{
        this.trendingPeople = res.results

      }
    })

  }

  clickedPage(pagenum:number){
    this.moviesService.getPersonByPagination(pagenum).subscribe({
      next:(res)=>{
        this.trendingPeople = res.results
      }
    })
  }
}
