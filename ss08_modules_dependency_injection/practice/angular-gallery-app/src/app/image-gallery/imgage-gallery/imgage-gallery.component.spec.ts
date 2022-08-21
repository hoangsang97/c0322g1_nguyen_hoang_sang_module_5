import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgageGalleryComponent } from './imgage-gallery.component';

describe('ImgageGalleryComponent', () => {
  let component: ImgageGalleryComponent;
  let fixture: ComponentFixture<ImgageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
