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

  constructor(private heroesService:HeroesService, 
              private activatedRoute:ActivatedRoute,
              private router:Router) { 
      this.activatedRoute.params.subscribe(params => {        
          this.newArrayHeroesBuscados = this.heroesService.buscarHeroes(params['termino']);
        }
      );
  }

  ngOnInit() {
    
  }
}
