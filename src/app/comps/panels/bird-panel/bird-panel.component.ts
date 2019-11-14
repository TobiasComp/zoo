import { Component, OnInit } from '@angular/core';
import { BirdService } from '../../../services/bird.service';

@Component({
  selector: 'app-bird-panel',
  templateUrl: './bird-panel.component.html',
  styleUrls: ['./bird-panel.component.css']
})
export class BirdPanelComponent implements OnInit {

  constructor(public birdService: BirdService) { }

  ngOnInit() {
  }

  // navBird(name:string){
  //     let index=0;
  //     this.birdService.birds.forEach(bird => {
  //       if (bird.name==name){
  //         this.birdService.currentIndex = index;
  //         this.birdService.currentBird = this.birdService.birds[this.birdService.currentIndex];
  //       }
  //     index++;
  //     });
  // }
}
