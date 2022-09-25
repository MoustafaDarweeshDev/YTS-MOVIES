import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  trendingTv:any[]=[]
  pages:number[]=[]
  pagesNumber:number=10
  term=' '
  imgPrefix = 'https://image.tmdb.org/t/p/w500'

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages=new Array(this.pagesNumber).fill('').map((x,i)=>i+1)
    this.moviesService.getMoviesByPagination(1,'tv').subscribe({
      next:(res)=>{
        this.trendingTv = res.results

      }
    })

  }

  clickedPage(pagenum:number){
    this.moviesService.getMoviesByPagination(pagenum,'tv').subscribe({
      next:(res)=>{
        this.trendingTv = res.results
      }
    })
  }
}
