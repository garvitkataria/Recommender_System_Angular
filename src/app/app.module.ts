import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

import  {RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes:Routes=[
  {path:'movies', component:MovieComponent},
  {path:'recommendations', component:RecommendationComponent},
  {path:'', component:WelcomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    RecommendationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
