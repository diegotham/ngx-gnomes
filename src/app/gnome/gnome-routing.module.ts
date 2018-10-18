import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomeListComponent } from './containers/gnome-list/gnome-list.component';

export const routes: Routes = [
  { path: 'gnomes', component: GnomeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GnomeRoutingModule {}
