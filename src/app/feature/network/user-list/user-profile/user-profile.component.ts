/**
 |--------------------------------------------------------------
 | User Profile Component!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Component, OnInit, Input } from '@angular/core';

/*
* @NgModule decorator with its metadata
*/
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

/**
 * User Profile Component
 */
export class UserProfileComponent implements OnInit {
  /**
   * Input Property
   */
  @Input() userProfile;

  /**
   * Constructor for User Profile Component
   */
  constructor() { }

  /**
   * Component Lifecycle Method for Initialisation
   */
  ngOnInit(): void {
  }

}
