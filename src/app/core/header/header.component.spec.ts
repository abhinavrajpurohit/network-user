/**
 |--------------------------------------------------------------
 | Application Header Test Cases!!
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h2 tag as \'Sample Test\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const h2tag = compile.querySelector('h2');
    expect(h2tag.textContent).toBe('Sample Test');
  });

  it('should have span tag as \'Welcome Girija\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).toBe('Welcome Girija');
  });

  it('should have h2 tag as \'Sample Hest\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const h2tag = compile.querySelector('h2');
    expect(h2tag.textContent).not.toBe('Sample Hest');
  });

  it('should have span tag as \'Welcome Abhinav\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).not.toBe('Welcome Abhinav');
  });

  it('should not have h2 tag as \'Sample Test\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const h2tag = compile.querySelector('h2');
    expect(h2tag.textContent).not.toBe('');
  });

  it('should not have span tag as \'Welcome Girija\'', () => {
    const compile = fixture.debugElement.nativeElement;
    const spantag = compile.querySelector('span');
    expect(spantag.textContent).not.toBe('');
  });
});
