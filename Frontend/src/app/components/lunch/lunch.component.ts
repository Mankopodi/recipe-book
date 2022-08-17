import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lunch } from 'src/app/interface/lunch';
import { MenuService } from 'src/app/service/menu.service';
import { FormBuilder , FormControl, FormGroup, Validators} from '@angular/forms';
import { Recipe } from 'src/app/interface/recipe';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  lunch:lunch[]= []; 
  myForm! : FormGroup;
  Meal_Name: FormControl = new FormControl;
  Description: FormControl = new FormControl;
  imgUrl: FormControl = new FormControl;
  

  constructor(private menuService:MenuService, private route: ActivatedRoute) { 
    // route.params.subscribe((params)=>{
    //   if(params['tags'])
    //   {
    //     this.lunch = menuService.getMeal()
    //   }
    // })
  }

  ngOnInit(): void {
    this.menuService.getLunch().subscribe((data) =>{
      this.lunch = data;
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
