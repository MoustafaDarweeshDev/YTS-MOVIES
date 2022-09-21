import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private client:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this.client.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=b593537922c5c1c79afa67446ad3eb3b&language=en-US&`)
  }

  getMovieById(id:any):Observable<any>
  {
    return this.client.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b593537922c5c1c79afa67446ad3eb3b&language=en-US`)
  }
  getMoviesByPagination(page:any):Observable<any>
  {
    return this.client.get(`https://api.themoviedb.org/3/discover/movie?api_key=b593537922c5c1c79afa67446ad3eb3b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
  }
}
