import { Injectable } from '@angular/core';

export interface Product{
  id:string;
  name:String;
  description:string;
  price:number;
  imgSRC:string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public fruits:Product[];
  public vegetables:Product[];

  constructor() { }

  initFruits(){
    return [{"name":"Strawberry","description":"Keep calm and eat a strawberry.","price":143,"imgSRC":"https://media.istockphoto.com/photos/strawberries-picture-id173888437?k=20&m=173888437&s=170667a&w=0&h=aP335BJ64PSCH1uXaveKKLYqi05Gi-QlWpAvNdcBwEU=","id":"1"},{"name":"Banana","description":"Goals are like bananas, they come in bunches.","price":60,"imgSRC":"https://media.istockphoto.com/photos/banana-picture-id1184345169?k=20&m=1184345169&s=612x612&w=0&h=EKwCw7Zx20N3l8G_rQI6KcitWTQ5ahkgmEBr2QA1FMk=","id":"2"},{"name":"Apple","description":"An Apple a day keeps doctor away.","price":43,"imgSRC":"https://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?b=1&k=20&m=183422512&s=170667a&w=0&h=c8D5-GOOU68UyQGXhNN2ycPGsqHixK3i_x08wHfrNsA=","id":"3"},{"name":"Pineapple","description":"When life hands you pineapples, you best make piña coladas.","price":150,"imgSRC":"https://media.istockphoto.com/photos/whole-with-slice-ripe-pineapple-isolated-on-white-background-picture-id1064819674?k=20&m=1064819674&s=612x612&w=0&h=WIYJDrmo9L6xh8-l0dCkmCCb9_rIBQhhp4m2MXK_XMc=","id":"4"},{"name":"Strawberry","description":"Keep calm and eat a strawberry.","price":143,"imgSRC":"https://media.istockphoto.com/photos/strawberries-picture-id173888437?k=20&m=173888437&s=170667a&w=0&h=aP335BJ64PSCH1uXaveKKLYqi05Gi-QlWpAvNdcBwEU=","id":"5"},{"name":"Banana","description":"Goals are like bananas, they come in bunches.","price":60,"imgSRC":"https://media.istockphoto.com/photos/banana-picture-id1184345169?k=20&m=1184345169&s=612x612&w=0&h=EKwCw7Zx20N3l8G_rQI6KcitWTQ5ahkgmEBr2QA1FMk=","id":"6"},{"name":"Apple","description":"An Apple a day keeps doctor away.","price":43,"imgSRC":"https://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?b=1&k=20&m=183422512&s=170667a&w=0&h=c8D5-GOOU68UyQGXhNN2ycPGsqHixK3i_x08wHfrNsA=","id":"7"},{"id":"8","name":"Pineapple","description":"When life hands you pineapples, you best make piña coladas.","price":150,"imgSRC":"https://media.istockphoto.com/photos/whole-with-slice-ripe-pineapple-isolated-on-white-background-picture-id1064819674?k=20&m=1064819674&s=612x612&w=0&h=WIYJDrmo9L6xh8-l0dCkmCCb9_rIBQhhp4m2MXK_XMc="},{"id":"9","name":"Strawberry","description":"Keep calm and eat a strawberry.","price":143,"imgSRC":"https://media.istockphoto.com/photos/strawberries-picture-id173888437?k=20&m=173888437&s=170667a&w=0&h=aP335BJ64PSCH1uXaveKKLYqi05Gi-QlWpAvNdcBwEU="},{"id":"10","name":"Banana","description":"Goals are like bananas, they come in bunches.","price":60,"imgSRC":"https://media.istockphoto.com/photos/banana-picture-id1184345169?k=20&m=1184345169&s=612x612&w=0&h=EKwCw7Zx20N3l8G_rQI6KcitWTQ5ahkgmEBr2QA1FMk="},{"id":"11","name":"Apple","description":"An Apple a day keeps doctor away.","price":43,"imgSRC":"https://media.istockphoto.com/photos/fresh-red-apples-on-white-background-picture-id183422512?b=1&k=20&m=183422512&s=170667a&w=0&h=c8D5-GOOU68UyQGXhNN2ycPGsqHixK3i_x08wHfrNsA="},{"id":"12","name":"Pineapple","description":"When life hands you pineapples, you best make piña coladas.","price":150,"imgSRC":"https://media.istockphoto.com/photos/whole-with-slice-ripe-pineapple-isolated-on-white-background-picture-id1064819674?k=20&m=1064819674&s=612x612&w=0&h=WIYJDrmo9L6xh8-l0dCkmCCb9_rIBQhhp4m2MXK_XMc="}];
  }

  initVegetables(){
    return [{"name":"Tomato","description":"An Tomato a day keeps doctor away.","price":90,"imgSRC":"https://media.istockphoto.com/photos/tomatoes-isolate-on-white-background-tomato-half-isolated-tomatoes-picture-id1258142863?b=1&k=20&m=1258142863&s=170667a&w=0&h=iFVeHatKRUPjoAd2YR1Lgjv_74tZ-gTBbT3cOqFy0BI=","id":"1"},{"name":"Cauliflower","description":"Goals are like Cauliflower, they come in bunches.","price":65,"imgSRC":"https://st.depositphotos.com/1364311/3142/i/600/depositphotos_31426207-stock-photo-cauliflower.jpg","id":"2"},{"name":"Capsicum","description":"Keep calm and eat a Capsicum.","price":85,"imgSRC":"https://5.imimg.com/data5/DM/XT/MY-29773055/capsicum-500x500.png","id":"3"},{"name":"Spinach","description":"When life hands you Spinach, you best make Spinach.","price":102,"imgSRC":"https://images.squarespace-cdn.com/content/v1/565879a5e4b06edc0aca642f/1555340443989-4U8B8SMMCZGMRHPMA5AJ/Picture6.png","id":"4"}];
  }
}
