import { RouterModule, Routes } from "@angular/router";
import { MediaItemFormComponent } from "../media-item-form.component";

const newItemsRoutes: Routes = [
  {path: '', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemsRoutes);
