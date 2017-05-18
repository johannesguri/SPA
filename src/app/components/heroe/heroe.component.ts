import { HeroesService } from './../../servicios/heroes.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent implements OnInit {

    heroe:any = {};

    constructor(private activatedRoute:ActivatedRoute,
                private heroesService:HeroesService) { 
        this.activatedRoute.params.subscribe( params =>{
            this.heroe = heroesService.getHeroe(params['id']);
            console.log(this.heroe);
        })
    }

    ngOnInit() {
        
     }
}