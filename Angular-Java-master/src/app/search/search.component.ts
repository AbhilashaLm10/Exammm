import { Component, OnInit } from '@angular/core';
import { Pizza } from '../Model/Pizza';
import { PizzaService } from '../Service/pizza.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchObj:Pizza;
  constructor(private service:PizzaService) {
    this.searchObj=new Pizza();
   }

  ngOnInit() {
  }

  search(id:number){
    this.searchObj=this.service.searchOrder(id);
    return this.searchObj;
  }


}
