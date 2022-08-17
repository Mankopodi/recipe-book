import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/service/menu.service';
import { Recipe } from 'src/app/interface/recipe';
import { category } from 'src/app/interface/category';
import { meal } from 'src/app/interface/meal';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {
  @Input("recipe") cate:meal | undefined
  
  meals : meal[] = []
  constructor(private menuService: MenuService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.menuService.getMeal().subscribe((data) =>{
      this.meals = data;
      console.log(data)
    })
  }
  goTo (){
    this.router.navigate([`/recipe-page/${this.cate?.name}`])
  }


}
