import { Component, OnInit } from '@angular/core';
import { WildService } from '../../../services/wild.service';

@Component({
  selector: 'app-wild-panel',
  templateUrl: './wild-panel.component.html',
  styleUrls: ['./wild-panel.component.css']
})
export class WildPanelComponent implements OnInit {

  constructor(public wildService: WildService) { }

  ngOnInit() {
  }

}
