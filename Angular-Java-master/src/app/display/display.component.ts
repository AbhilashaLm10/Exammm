import { Component, OnInit } from '@angular/core';
import { Pizza } from '../Model/Pizza';
import { PizzaService } from '../Service/pizza.service';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit,ReactiveFormsModule {
pizzaArr:Pizza[];
Obj:Pizza;
isEdited=false;
  constructor(private service:PizzaService) {
    this.pizzaArr=[];
    this.Obj=new Pizza();
   }

  ngOnInit() {
    this.pizzaArr=this.service.getOrder();
  }
  
  delete(index:number){
    this.service.deleteOrder(index);
  }

  edit(id:number){
    this.isEdited=true;
    this.Obj=this.service.editOrder(id);
  }

  sort(){
    this.service.sort();
  }


}
