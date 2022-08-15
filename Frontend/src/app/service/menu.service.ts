import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { category } from '../interface/category';
import { snack } from '../interface/snack';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public getCategory():Observable <category[]> {
    return this.http.get<category[]>('http://localhost:3000/Category');
  }
  public getSnack():Observable <snack[]> {
    return this.http.get<snack[]>('http://localhost:3000/snack');
  }
  public getBreackfast():Observable <snack[]> {
    return this.http.get<snack[]>('http://localhost:3000/breakfast');
  }


  }

