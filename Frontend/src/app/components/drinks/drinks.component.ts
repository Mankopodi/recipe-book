import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drinks } from 'src/app/interface/drinks';
import { MenuService } from 'src/app/service/menu.service';
import { FormBuilder , FormControl, FormGroup, Validators} from '@angular/forms';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  drinks:drinks[]= [];
  myForm! : FormGroup;
  Meal_Name: FormControl = new FormControl;
  Description: FormControl = new FormControl;
  imgUrl: FormControl = new FormControl;
  drink: any;
  
   


  constructor(private menuService:MenuService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.menuService.getDrinks().subscribe((data) =>{
      this.drinks = data;
      console.log(data)
    })
    this.createFormcontrol();
    this.createform();
 
  }
  createFormcontrol(){
    this.Meal_Name = new FormControl('', Validators.required);
    this.Description = new FormControl('', Validators.required);
  }
  createform(){
    this.myForm = new FormGroup({
      Meal_Name: this.Meal_Name,
      Description: this.Description
    })
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log("Form Submitted!");
      this.myForm.reset();
    }
  }

}
