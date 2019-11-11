import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BirdService } from '../../../services/bird.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(public birdService:BirdService) { }
  @Output() moveItemEvent:EventEmitter<number> = new EventEmitter<number>()

  ngOnInit() {
  }

  moveItem(changeIndex: number){
    this.moveItemEvent.emit(changeIndex);
  }
  // moveItem(changeIndex:number){
  //   console.log("moveItem invoked",changeIndex,"the index is",this.birdService.currentIndex);
  //   if (this.birdService.currentIndex==0 && changeIndex==-1)
  //     this.birdService.currentIndex = 4;
  //   else {
  //     this.birdService.currentIndex = (changeIndex + this.birdService.currentIndex) % 5;
  //     this.birdService.currentBird = this.birdService.birds[this.birdService.currentIndex];
  //   }
  // }
}
