import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isFruits:boolean = false;

  constructor(private aRoute:ActivatedRoute, private router:Router) { 
    const isLoggedIn = localStorage.getItem('login');
    if(!isLoggedIn || isLoggedIn != '1'){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.aRoute.params.subscribe((param)=>{
      this.isFruits = this.router.url.includes('home/fruits');
    });
  }

  logout(){
    localStorage.clear();
  }

}
