import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CategoryListPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemFormComponent } from './media-item/form/media-item-form.component';
import { MediaItemListComponent } from './media-item/list/media-item-list.component';
import { MediaItemComponent } from './media-item/media.item.component';
import { MockXHRBackend } from './mock-xhr-backend';
import { lookupLists, lookupListToken } from './providers';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists },
    {provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
