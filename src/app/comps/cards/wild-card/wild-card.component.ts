import { Component, OnInit } from '@angular/core';
import { WildService } from '../../../services/wild.service';

@Component({
  selector: 'app-wild-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public wildService: WildService) { }

  ngOnInit() {
  }

}
