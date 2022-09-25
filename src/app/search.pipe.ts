import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingMovies:any[] , term:string , prop:string): any[] {
     var props = prop;
    return trendingMovies.filter((movie)=>movie[props].toLowerCase().includes(term.toLowerCase()));
  }

}
