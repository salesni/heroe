import {RouterModule, Routes} from "@angular/router"
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from "./components/home/home.component";





const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent  },
    { path: 'about', component: AboutComponent  },
    { path: 'heroe/:id', component: HeroeComponent  },
    { path: 'buscador/:termino', component: BuscadorComponent  },
    { path: 'heroes', component: HeroesComponent  },
    { path: '**', pathMatch: 'full',redirectTo:'home'  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});