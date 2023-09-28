/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreadacitaComponent } from './creadacita.component';

describe('CreadacitaComponent', () => {
  let component: CreadacitaComponent;
  let fixture: ComponentFixture<CreadacitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreadacitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadacitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
