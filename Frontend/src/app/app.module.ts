import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { LunchComponent } from './components/lunch/lunch.component';
// import { SupperComponent } from './components/supper/supper.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
// import { SnackComponent } from './components/snack/snack.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    ViewRecipeComponent,
    LunchComponent,
    // SupperComponent,
    DrinksComponent,
    BreakfastComponent,
    // SnackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
