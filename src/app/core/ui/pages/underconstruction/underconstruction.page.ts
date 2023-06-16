import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-underconstruction',
  templateUrl: './underconstruction.page.html',
  styleUrls: ['./underconstruction.page.scss']
})
export class UnderconstructionPage implements OnInit {

  constructor(
    private _route: Router
  ) {
  }
  ngOnInit() {
    setTimeout(() => {
      this._route.navigate(['landing'])
    },1000);
  }
}
