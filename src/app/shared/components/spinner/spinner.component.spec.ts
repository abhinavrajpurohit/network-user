/**
 |--------------------------------------------------------------
 | Spinner Component Test Cases!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have span tag as \'Loading...\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).toBe('Loading...');
  });

  it('should not have span tag as \'Loading...\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).not.toBe('Loading');
  });

  it('should have empty span tag as \'\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).not.toBe('');
  });
});
