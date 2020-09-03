/**
 |--------------------------------------------------------------
 | Spinner Component!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Component, OnInit, Input } from '@angular/core';

/*
* @NgModule decorator with its metadata
*/
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

/**
 * Spinner Component
 */
export class SpinnerComponent implements OnInit {
  /**
   * Input Property
   */
  @Input() isLoading = false;
  @Input() message: string | undefined;

  /**
   * Constructor for User List Component
   */
  constructor() { }

  /**
   * Component Lifecycle Method for Initialisation
   */
  ngOnInit(): void {
  }

}
