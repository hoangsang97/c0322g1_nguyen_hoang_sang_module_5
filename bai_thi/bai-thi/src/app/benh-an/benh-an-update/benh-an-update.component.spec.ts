import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhAnUpdateComponent } from './benh-an-update.component';

describe('BenhAnUpdateComponent', () => {
  let component: BenhAnUpdateComponent;
  let fixture: ComponentFixture<BenhAnUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhAnUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhAnUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
