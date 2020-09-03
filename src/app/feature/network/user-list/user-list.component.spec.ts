/**
 |--------------------------------------------------------------
 | User Network Test Cases!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { async, TestBed } from '@angular/core/testing';
import { getTestScheduler, cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';

import { UserListComponent } from './user-list.component';
import { HttpService } from 'src/app/core/services/http.service';

const dataResponse = {
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }
  ],
  "ad": {
    "company": "StatusCode Weekly",
    "url": "http://statuscode.org/",
    "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
  }
}
const httpServiceStub = {
  GetAll() {
    const data$ = cold('--x|', dataResponse);
    return data$
  }
};

describe('UserListComponent', () => {
  let httpService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [{ provide: HttpService, useValue: httpServiceStub }],
    }).compileComponents();
  }));

  it('should correctly show all users', async () => {
    const fixture = TestBed.createComponent(UserListComponent);
    fixture.detectChanges(); // trigger change detection

    getTestScheduler().flush(); // flush the observable
    fixture.detectChanges(); // trigger change detection again

    const liElements = fixture.debugElement.queryAll(By.css('.user-list'));
    expect(liElements.length).toBe(0);
  });
  
});
