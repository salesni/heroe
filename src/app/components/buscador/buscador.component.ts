import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [];
  termino!:string;
  
  constructor(private  router : Router, private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes = this. heroesService.buscarHeroe(this.termino);
    });
  }
  verHeroe(index:number){
    this.router.navigate(['/heroe',index]);
  }

}
