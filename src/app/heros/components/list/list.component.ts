import { Component } from '@angular/core';

interface Hero{
  nombre:string|'No establecido';
  edad:number|0;
}

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styles: ``
})



export class ListComponent {
  public heros2:string[]=['Batman','Ironman','Superman','Flash'];
  public clic:boolean=false;
  public heros:Hero[]=[{
      nombre:'Batman',
      edad:32
    },
    {
      nombre:'Ironman',
      edad:43
    },
    {
     nombre:'Superman',
     edad:120
    },
    {
      nombre:'Flash',
      edad:23
    }
  ];
  public eliminatedHero?:Hero;

  deleteLastHero():void{
    this.clic=true;
    this.eliminatedHero=this.heros.pop();
  }
}
