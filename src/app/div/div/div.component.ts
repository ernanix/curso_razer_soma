import { Component, OnInit } from '@angular/core';
import { DivService } from '../services';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {
  private res: number = 0;

  constructor(private divService: DivService) { }

  ngOnInit(): void {
  }

  dividir(numero1: string, numero2: string) : void {
    this.res = this.divService.dividir(parseFloat(numero1),parseFloat(numero2));
  }

  get resultado() : string {
    return this.res.toString();
  }

}
