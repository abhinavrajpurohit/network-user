/**
 |----------------------------------------------------
 | HTTP Service Test Cases!!
 | @version 1.0.0
 |----------------------------------------------------
 */
/*
* Test Cases for HTTP Service
*/
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserListData } from '../interfaces/user';

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('can test HttpClient.GetAll', () => {
    const testData: UserListData = { 
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

    // Make an HTTP GET request
    httpClient.get<UserListData>('/users')
    .subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/users');

    // Verify request as a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Verify for outstanding requests.
    httpTestingController.verify();
  });

  it('can test for 404 error', () => {
    const errorMessage = 'deliberate 404 error';
  
    httpClient.get<UserListData[]>('/users').subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(errorMessage, 'message');
      }
    );
  
    const req = httpTestingController.expectOne('/users');
  
    // Respond with mock error
    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });

  afterEach(() => {
    // After every test, verify for no more pending requests.
    httpTestingController.verify();
  });

  it('can test for network error', () => {
    const errorMessage = 'Network error';
  
    httpClient.get<UserListData[]>('/users').subscribe(
      data => fail('should have failed with the network error'),
      (error: HttpErrorResponse) => {
        expect(error.error.message).toEqual(errorMessage, 'message');
      }
    );
  
    const req = httpTestingController.expectOne('/users');
  
    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: errorMessage,
    });
  
    // Respond with mock error
    req.error(mockError);
  });

});
