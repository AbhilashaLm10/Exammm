import { Injectable } from '@angular/core';
import { Pizza } from "../Model/Pizza";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzaArr:Pizza[];

  constructor(private route:Router) {
    this.pizzaArr=[];
   }

   addOrder(Obj:Pizza){
     //id creation
     Obj.orderId=Math.floor(Math.random()*100);
     //defining the price 
     switch (Obj.ordered) {
       case 'Pizza':Obj.price=300;
                   break;
       case 'Burgar' :Obj.price=200;
                   break;
       case 'Sandwitch' :Obj.price=100;
                   break; 
       case 'Milkshake' :Obj.price=50;
                   break;           
     
       default:
         break;
     }
     this.pizzaArr.push(Obj);
     //this.route.navigate(['/display']);
   }

   getOrder(){
     return this.pizzaArr;
   }

   searchOrder(id:number){
     var result=this.pizzaArr.find(x=>x.orderId==id);
     if(result==null){
      return null;
     }else{
       return result;
     }
   }

   deleteOrder(index:number){
     return this.pizzaArr.splice(index,1);
   }

   sort(){
     return this.pizzaArr.sort((x,y)=>x.orderId>y.orderId ? 1: (x.orderId<y.orderId)?-1:0);
   }

   editOrder(id:number){
     return this.pizzaArr.find(x=>x.orderId==id);
   }
}
