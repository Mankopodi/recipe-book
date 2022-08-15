import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';
import { category } from 'src/app/interface/category';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  category : category[] = []
  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menuService.getCategory().subscribe((data) =>{
      this.category = data;
      console.log(data)
    })
  }

}
