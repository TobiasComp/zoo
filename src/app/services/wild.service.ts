import { Injectable } from '@angular/core';
import { Wild } from '../models/wilds';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  wilds: Wild[] = [];
  currentIndex = 0;
  currentWild:Wild;

  constructor(private http:HttpClient) { 
    console.log("construct WildService");
    http.get('https://raw.githubusercontent.com/TobiasComp/zoo/master/src/assets/wilds.json')
      .subscribe(data =>{
      this.wilds = data as Wild[];
      this.currentWild = this.wilds[0];
    })
  }
}
