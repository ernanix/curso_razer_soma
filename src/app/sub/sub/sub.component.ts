import { Component, OnInit } from '@angular/core';
import { SubService } from '../services';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
  private res:number = 0;

  constructor(private subService:SubService) { }

  ngOnInit(): void {
  }

  subtrair(numero1:string, numero2:string): void {
    this.res =  this.subService.subtrair(parseFloat(numero1),parseFloat(numero2));
  }

  get resultado():string{
    return this.res.toString();
  }

}
