import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[]=[]
  pages:number[]=[]
  pagesNumber:number=10
  term=' '
  imgPrefix = 'https://image.tmdb.org/t/p/w500'

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages=new Array(this.pagesNumber).fill('').map((x,i)=>i+1)
    this.moviesService.getMoviesByPagination(1).subscribe({
      next:(res)=>{
        this.trendingMovies = res.results
      }
    })

  }

  clickedPage(pagenum:number){
    this.moviesService.getMoviesByPagination(pagenum).subscribe({
      next:(res)=>{
        this.trendingMovies = res.results
      }
    })
  }
}
