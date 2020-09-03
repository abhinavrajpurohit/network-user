/**
 |--------------------------------------------------------------
 | Application Header!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Component, OnInit } from '@angular/core';

/*
* @Component decorator with its metadata
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/*
* Header Component Declaration
*/
export class HeaderComponent implements OnInit {

  /*
  * Constructor for Header Component
  */
  constructor() { }

  /*
  * Component Lifecycle Method
  */
  ngOnInit(): void {
  }

}
