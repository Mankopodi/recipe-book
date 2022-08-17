import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { category } from '../interface/category';
import { snack } from '../interface/snack';
import { Observable } from 'rxjs';
import { breakfast } from '../interface/breakfast';
import { lunch } from '../interface/lunch';
// import { supper } from '../interface/supper';
import { drinks } from '../interface/drinks';
import { Recipe } from '../interface/recipe';
import { meal } from '../interface/meal';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
         ////// types of food 

  public getCategory():Observable <category[]> {
    return this.http.get<category[]>('http://localhost:3000/category');
  }

  // public getMealByTag():Observable<

       ///////fot the means inside each category
  public getMeal():Observable <meal[]> {
    return this.http.get<meal[]>('http://localhost:3000/meals');
  }
  public getBreackfast():Observable <breakfast[]> {
    return this.http.get<breakfast[]>('http://localhost:3000/breakfast');
  }
  public getLunch():Observable<lunch[]>{
    return this.http.get<lunch[]>('http://localhost:3000/meals')
  }
  // public getSupper():Observable<supper[]>{
  //   return this.http.get<supper[]>('http://localhost:3000/supper')
  // } 
  public getDrinks():Observable<drinks[]>{
    return this.http.get<drinks[]>('http://localhost:3000/drinks')
  } 

  public getRecipe():Observable<Recipe[]>{
    return this.http.get<Recipe[]>('http://localhost:3000/recipe')
  } 
  }

