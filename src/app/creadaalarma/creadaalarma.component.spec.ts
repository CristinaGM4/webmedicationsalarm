/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreadaalarmaComponent } from './creadaalarma.component';

describe('CreadaalarmaComponent', () => {
  let component: CreadaalarmaComponent;
  let fixture: ComponentFixture<CreadaalarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadaalarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadaalarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
