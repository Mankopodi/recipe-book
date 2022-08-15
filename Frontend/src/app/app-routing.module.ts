import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RecipePageComponent } from './components/recipe-page/recipe-page.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '',redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component:LandingPageComponent },
  {path: 'recipe-page', component: RecipePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
