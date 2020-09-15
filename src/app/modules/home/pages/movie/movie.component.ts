import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  data: any = [];
  movie: any = [];
  itemsMoviesScrool: number = 9;
  existSearch: boolean = false;
  constructor( private movieServices: MoviesService, private activateRouter: ActivatedRoute) {
    this.activateRouter.params.subscribe(
      parametros => {
        this.getMovie(parametros['id']);
      }
    );
   }

  ngOnInit() { }

  getMovie(id) {
    this.movieServices.getDataMovie(id).then(rest => {
      this.movie = rest;
      console.log(rest);
    });
  }

  getImge(img: string) {
    let url = "https://image.tmdb.org/t/p/w500/"+img+"";
    return url;
  }

}
