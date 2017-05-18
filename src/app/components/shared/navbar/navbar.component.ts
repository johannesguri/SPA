import { HeroesService } from './../../../servicios/heroes.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService:HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(str:string){
    this.heroesService.buscarHeroes(str);
  }

}
