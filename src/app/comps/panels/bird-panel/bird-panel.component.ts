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

}
