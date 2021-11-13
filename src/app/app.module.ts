import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavorireDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item/form/media-item-form.component';
import { MediaItemListComponent } from './media-item/list/media-item-list.component';
import { MediaItemComponent } from './media-item/media.item.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavorireDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
