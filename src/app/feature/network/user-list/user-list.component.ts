/**
 |--------------------------------------------------------------
 | User List Component!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Apiurl } from 'src/app/shared/common/apiurl/apiurl';
import { UserListData, UserData } from 'src/app/core/interfaces/user';

/*
* @NgModule decorator with its metadata
*/
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

/**
 * User List Component
 */
export class UserListComponent implements OnInit {

  /**
   * Component Variable Declarations
   */
  isLoading: boolean = false;
  userList: UserListData;
  userProfile: UserData;

  /**
   * Constructor for User List Component
   */
  constructor(private httpService: HttpService) { }

  /**
   * Component Lifecycle Method for Initialisation
   */
  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * This is a function to get list of users by making an api call.
   * @version 1.0.0
   * @return Return a list of users
   * @example
   * getUsers()
   */
  getUsers(): void {
    this.isLoading = true;
    this.httpService.GetAll(`${Apiurl.USERS_API_URL}`)
      .subscribe((data)  => {
        // Error Case
        this.isLoading = false;
        if(data.status !== 200) {
          console.log('Handling Error');
        }

        // Success Case
        this.userList = { ...data.body };
        this.userProfile = this.userList.data[0];
      },
      err => console.log('Http Error', err),
      () => console.log('HTTP Request completed')
    );
  }

}
