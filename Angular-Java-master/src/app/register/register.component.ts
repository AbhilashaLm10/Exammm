import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../Model/Pizza';
import { PizzaService } from '../Service/pizza.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pizzaArr:Pizza[];

@Input() Obj:Pizza;
@Input() isEdited=false;
@Output() edited=new EventEmitter();
  constructor(private service:PizzaService) { 
    this.Obj=new Pizza();
  }
  ngOnInit() {
    this.pizzaArr=this.service.getOrder();
  }
  
  add(){
    this.service.addOrder(this.Obj);
    this.Obj=new Pizza();
  }

  update(){
    this.isEdited=false;
    this.Obj=new Pizza();
    this.edited.emit();
  }

}
