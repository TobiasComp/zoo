import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../../services/paging.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public pagingSvc: PagingService) {
    this.navTo('birds');
   }

  ngOnInit() {
  }

  navTo(pagename:string):void{

    this.pagingSvc.currentPanel = pagename;
  }

}
