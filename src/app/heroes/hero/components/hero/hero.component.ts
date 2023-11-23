import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 45;
  
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    //throw 'not implemented';
    this.name = 'Spiderman'
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm():void {
    this.age = 45;
    this.name = 'Ironman'
    //document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    //document.querySelectorAll('h1')!.forEach( element => { element.innerHTML = '<h1>Desde Angular</h1>'});    

  }

}
