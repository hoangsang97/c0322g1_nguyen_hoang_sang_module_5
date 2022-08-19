import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionayPageComponent } from './dictionay-page.component';

describe('DictionayPageComponent', () => {
  let component: DictionayPageComponent;
  let fixture: ComponentFixture<DictionayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
