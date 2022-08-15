import { Component, OnInit } from '@angular/core';
import { snack } from 'src/app/interface/snack';
import { breakfast } from 'src/app/interface/breakfast';
import { MenuService } from 'src/app/service/menu.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  snack: snack[] = []
  breakfast:breakfast[]= [];

  constructor(private menuService:MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menuService.getSnack().subscribe((data) =>{
      this.snack = data;
      console.log(data)
    })
    this.menuService.getBreackfast().subscribe((data)=>{
    this.breakfast = data;
    console.log(data);
  })
  }

}
