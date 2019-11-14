import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdService } from './services/bird.service';
import { DomesticService } from './services/domestic.service';
import { WildService } from './services/wild.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Avrazoo';
  
  constructor(public paging:PagingService, public birdService:BirdService, public domesticService: DomesticService,
    public wildService: WildService) {}
  
    changeItem(ev){

      // switch(window.location.pathname.substring(1,)){
    switch(this.paging.currentPanel){
      case 'birds':
        if (this.birdService.currentIndex==0 && ev==-1)
          this.birdService.currentIndex = 4;
        else {
          this.birdService.currentIndex = (ev + this.birdService.currentIndex) % 5;
          this.birdService.currentBird = this.birdService.birds[this.birdService.currentIndex];
        }
        break;
      case 'wilds':
        if (this.wildService.currentIndex==0 && ev==-1)
          this.wildService.currentIndex = 4;
        else {
          this.wildService.currentIndex = (ev + this.wildService.currentIndex) % 5;
          this.wildService.currentWild = this.wildService.wilds[this.wildService.currentIndex];
        }
        break;
      case 'domestics':
        if (this.domesticService.currentIndex==0 && ev==-1)
          this.domesticService.currentIndex = 4;
        else {
          this.domesticService.currentIndex = (ev + this.domesticService.currentIndex) % 5;
          this.domesticService.currentDomestic = this.domesticService.domestics[this.domesticService.currentIndex];
      }
        break;
    }
    
    
    
    
    
  }
}
