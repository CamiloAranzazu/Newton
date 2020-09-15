import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  data: any = [];
  movies: any = [];
  itemsMoviesScrool: number = 9;
  existSearch: boolean = false;
  constructor( private movieServices: MoviesService, private router: Router) { }

  @HostListener('mousewheel', ['$event']) 
    onMousewheel(event) {
     if(this.itemsMoviesScrool === 9 && event.deltaY === -100){
      this.itemsMoviesScrool = this.itemsMoviesScrool;
      this.getMovies();
     } else if (this.itemsMoviesScrool >= 9 && event.deltaY === 100 && this.existSearch === false) {
      this.itemsMoviesScrool=  this.itemsMoviesScrool +9;
      this.getMovies();
     }
  }

  ngOnInit() {
    this.movieServices.search.subscribe( search => {
      if(search) {
        this.getSearchMovies(search);
        this.existSearch = true;
      } else {
        this.getMovies();
        this.existSearch = false;
      }
    });
    
  }

  itemRouter(id) {
    this.router.navigate(['/home/movie', id]);
  }

  getMovies() {
    this.movieServices.getDataMovies().then(rest => {
      this.data = rest;
      this.movies = this.data.results.filter((results)=> 
        this.data.results.length = this.itemsMoviesScrool);
    });
  }

  getSearchMovies(text) {
    console.log(text);
    this.movieServices.getDataMovies().then(rest => {
      this.data = rest;
      this.movies = this.data.results.filter((results)=> 
        {
          if(results.title.toUpperCase().indexOf(text.toUpperCase()) !== -1) {
            return true;
          } else {
            return false;
          }
        });
    });
  }

  getImge(img: string) {
    let url = "https://image.tmdb.org/t/p/w500/"+img+"";
    return url;
  }

}
