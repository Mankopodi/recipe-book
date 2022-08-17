import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { category } from 'src/app/interface/category';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Input("recipe") cate:category | undefined
  
  category : category[] = []
  constructor(private menuService: MenuService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.menuService.getCategory().subscribe((data) =>{
      this.category = data;
      console.log(data)
    })
  }
  goTo (){
    this.router.navigate([`/recipe-page/${this.cate?.Name}`])
  }

}
