import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  movieId:any
  movie:any
  imagePrefix = 'https://image.tmdb.org/t/p/w500'
  constructor(private url:ActivatedRoute , private moviesService:MoviesService) { }

  ngOnInit(): void {
   this.movieId = this.url.snapshot.params['id']
    this.moviesService.getMovieById(this.movieId).subscribe({
      next:(res)=>{
        this.movie = res
        console.log(res);

      }
    })
  }

}
