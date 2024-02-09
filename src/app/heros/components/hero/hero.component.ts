import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls:['./hero.component.css']
})
export class HeroComponent {
  public heros:string="Heroes";

  public name:string='ironman';
  public age:number=30;
  public nameFlat:boolean=false;
  public ageFlat:boolean=false;
  public resetFlat:boolean=false;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Spiderman'
    this.nameFlat=true;
    this.resetFlat=true;
  }

  changeAge():void{
    this.age=45;
    this.ageFlat=true;
    this.resetFlat=true;
  }

  reset(){
    this.name='ironman';
    this.age=30;
    this.ageFlat=false;
    this.nameFlat=false;
    this.resetFlat=false;

  }
}
