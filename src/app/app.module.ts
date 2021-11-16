import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavorireDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item/form/media-item-form.component';
import { MediaItemListComponent } from './media-item/list/media-item-list.component';
import { MediaItemComponent } from './media-item/media.item.component';
import { MockXHRBackend } from './mock-xhr-backend';
import { lookUpLists, lookupListToken } from './providers';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavorireDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    {provide: lookupListToken, useValue: lookUpLists },
    {provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
