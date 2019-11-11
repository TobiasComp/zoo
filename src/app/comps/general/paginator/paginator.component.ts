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
 
}
