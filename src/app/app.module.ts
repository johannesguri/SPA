import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { HeroesService } from './servicios/heroes.services';
//Componentes  
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesBuscadosComponent } from './components/heroes-buscados/heroes-buscados.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    HomeComponent, 
    HeroesComponent, 
    AboutComponent,
    HeroeComponent,
    HeroesBuscadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
