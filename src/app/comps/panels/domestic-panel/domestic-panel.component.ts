import { Component, OnInit } from '@angular/core';
import { DomesticService } from '../../../services/domestic.service';

@Component({
  selector: 'app-domestic-panel',
  templateUrl: './domestic-panel.component.html',
  styleUrls: ['./domestic-panel.component.css']
})
export class DomesticPanelComponent implements OnInit {

  constructor(public domesticService:DomesticService) { }

  ngOnInit() {
  }

}
