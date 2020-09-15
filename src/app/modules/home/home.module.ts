import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './pages/start/start.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { MovieComponent } from './pages/movie/movie.component';

@NgModule({
  declarations: [StartComponent, MovieComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
