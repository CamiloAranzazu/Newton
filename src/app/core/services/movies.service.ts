import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../http/api.service';
import { RequestOptions } from '../http/http.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key = "api_key=b2907782d07859a652052d3bae537475";
  search = new EventEmitter<string>();

  constructor(private rest: ApiService) { }

  getDataMovies() {
    let options: RequestOptions = {};
    return this.rest.get('/discover/movie/?'+this.api_key+'', options);
  }
  getDataMovie(id) {
    let options: RequestOptions = {};
    return this.rest.get('/movie/'+id+'?'+this.api_key+'', options);
  }

}
