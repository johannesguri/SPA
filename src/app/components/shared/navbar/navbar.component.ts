import { Router } from '@angular/router';
import { HeroesService } from './../../../servicios/heroes.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(criterioBusqueda:string){
    this.router.navigate(['/heroesBuscados', criterioBusqueda]);
  }

}
