import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import {ImageGalleryComponent} from './image-gallery.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ImageCardComponent,
    ImageGalleryComponent,
  ],
  exports: [
    ImageCardComponent,
    ImageGalleryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ImageGalleryModule { }
