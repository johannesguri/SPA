import { ActivatedRoute } from '@angular/router';
import { HeroesService , Heroe } from './../../servicios/heroes.services';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-buscados',
  templateUrl: './heroes-buscados.component.html'
})
export class HeroesBuscadosComponent implements OnInit {

  newArrayHeroesBuscados:Heroe[] = [];
  termino:string;
  msjNoHayResultados:boolean = false;
  constructor(private heroesService:HeroesService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params => {   
          this.termino = params['termino'];
          this.newArrayHeroesBuscados = this.heroesService.buscarHeroes(params['termino']);
        }
      );
    
  }
}
