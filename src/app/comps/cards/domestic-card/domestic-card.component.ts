import { Component, OnInit } from '@angular/core';
import { DomesticService } from '../../../services/domestic.service';

@Component({
  selector: 'app-domestic-card',
  templateUrl: './domestic-card.component.html',
  styleUrls: ['./domestic-card.component.css']
})
export class DomesticCardComponent implements OnInit {

  constructor(public domesticService:DomesticService) { }

  ngOnInit() {
  }

}
