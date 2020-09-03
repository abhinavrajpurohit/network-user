/**
 |--------------------------------------------------------------
 | Angular Root Component Test Cases!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { Location } from "@angular/common";
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HttpService } from './core/services/http.service';
import { Router, Routes } from "@angular/router";

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture; 
  const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./feature/network/network.module').then(m => m.NetworkModule)
    }
];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      providers: [HttpService]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-angular-app'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-angular-app');
  });

  it('navigate to "" redirects you to /User listing', () => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/");
    });
  });
});
