import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { HomeComponent } from './home.component';
import { MovieComponent } from './pages/movie/movie.component';

const defaultRedirect = '/home/start';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'start', component: StartComponent },
            { path: 'movie/:id', component: MovieComponent },
            { path: '**', redirectTo: defaultRedirect }
        ]
    },
    { path: '**', redirectTo: defaultRedirect }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }
