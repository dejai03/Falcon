import { Component, OnInit } from '@angular/core';
import { CommonService, Product } from '../shared/service/common.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  public fruits:Product[];
  public selectedfruits:Product;

  constructor(private commonServive:CommonService) { }

  ngOnInit() {
    this.fruits = this.commonServive.initFruits();
    this.selectedfruits = this.fruits[0];
  }

  selectFruit(fruit){
    this.selectedfruits = fruit;
  }

}
