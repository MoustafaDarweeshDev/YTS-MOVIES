import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }
  trendingMovies:any[]=[]
  trendingTv:any[]=[]
  trendingPeople:any[]=[]
  imgPrefix = 'https://image.tmdb.org/t/p/w500'

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTrending('movie').subscribe({
      next:(res)=>{
        this.trendingMovies = res.results.slice(0,10);
      }
    })
    this.moviesService.getTrending('tv').subscribe({
      next:(res)=>{
        this.trendingTv = res.results.slice(0,10);

      }
    })
    this.moviesService.getTrending('person').subscribe({
      next:(res)=>{
        this.trendingPeople = res.results.slice(0,10);
        console.log(this.trendingPeople[0]);

      }
    })
  }

}
