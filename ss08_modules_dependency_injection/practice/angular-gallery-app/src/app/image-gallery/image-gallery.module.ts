import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';



@NgModule({
  declarations: [ImageCardComponent],
  exports: [
    ImageCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule { }
