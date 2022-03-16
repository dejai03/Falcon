import { Component, OnInit } from '@angular/core';
import { CommonService, Product } from '../shared/service/common.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  public vegetables:Product[];
  public selectedvegetables:Product;

  constructor(private commonServive:CommonService) { }

  ngOnInit() {
    this.vegetables = this.commonServive.initVegetables();
    this.selectedvegetables = this.vegetables[0];
  }

  selectVegetable(vegetable){
    this.selectedvegetables = vegetable;
  }
}
