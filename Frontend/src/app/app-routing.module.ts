import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { RegisterComponent } from './components/register/register.component';
// import { SnackComponent } from './components/snack/snack.component';
// import { SupperComponent } from './components/supper/supper.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';

const routes: Routes = [
  {path: '',redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component:LandingPageComponent },
  // {path: 'snack', component: SnackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'view', component:ViewRecipeComponent},
  {path:'breakfast', component:BreakfastComponent},
  // {path:'supper', component:SupperComponent},
  {path:'drinks', component:DrinksComponent},
  {path:'lunch', component:LunchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 