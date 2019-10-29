import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: '**', pathMatch:"full", redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)