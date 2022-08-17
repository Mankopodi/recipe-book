// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { supper } from 'src/app/interface/supper';
// import { MenuService } from 'src/app/service/menu.service';
// import { FormBuilder , FormControl, FormGroup, Validators} from '@angular/forms';
// import { Recipe } from 'src/app/interface/recipe';

// @Component({
//   selector: 'app-supper',
//   templateUrl: './supper.component.html',
//   styleUrls: ['./supper.component.scss']
// })
// export class SupperComponent implements OnInit {

//   supper:supper[]= []; 
//   myForm! : FormGroup;
//   Meal_Name: FormControl = new FormControl;
//   Description: FormControl = new FormControl;
//   imgUrl: FormControl = new FormControl;
  
//   constructor(private menuService:MenuService, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.menuService.getSupper().subscribe((data) =>{
//       this.supper = data;
//       console.log(data)
//     })
//     this.createFormcontrol();
//     this.createform();
 
//   }
//   createFormcontrol(){
//     this.Meal_Name = new FormControl('', Validators.required);
//     this.Description = new FormControl('', Validators.required);
//   }
//   createform(){
//     this.myForm = new FormGroup({
//       Meal_Name: this.Meal_Name,
//       Description: this.Description
//     })
//   }
//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log("Form Submitted!");
//       this.myForm.reset();
//     }
//   }

// }
