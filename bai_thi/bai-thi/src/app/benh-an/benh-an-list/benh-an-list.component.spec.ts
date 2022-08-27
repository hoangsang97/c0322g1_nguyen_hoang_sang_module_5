import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhAnListComponent } from './benh-an-list.component';

describe('BenhAnListComponent', () => {
  let component: BenhAnListComponent;
  let fixture: ComponentFixture<BenhAnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhAnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhAnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
