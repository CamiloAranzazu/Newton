import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  addItem(newItem: string) {
    this.moviesServs.search.emit(newItem);
  }

  constructor(private moviesServs: MoviesService) { }

  ngOnInit() {
  }



}
