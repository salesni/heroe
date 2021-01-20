import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  devs: any[] =[];
  constructor(private service:HeroesService) {
    
   }

  ngOnInit(): void {
    this.devs = this.service.getDevelopers();
  }

}
