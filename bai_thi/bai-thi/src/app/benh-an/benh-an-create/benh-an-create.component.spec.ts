import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhAnCreateComponent } from './benh-an-create.component';

describe('BenhAnCreateComponent', () => {
  let component: BenhAnCreateComponent;
  let fixture: ComponentFixture<BenhAnCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhAnCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhAnCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
