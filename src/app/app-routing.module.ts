import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DdbbComponent } from './ddbb/ddbb.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "ddbb", component: DdbbComponent },
      { path: "404", component: NotFoundComponent },
      { path: "**", redirectTo: "404"  }
    ]),
  ],
  exports: [
    RouterModule       // basicamente todos los modules que importo al modulo que lo importa cuando este modulo es importado. xd
  ]
})
export class AppRoutingModule { }
