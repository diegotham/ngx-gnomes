import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnomeListComponent } from './containers/gnome-list/gnome-list.component';
import { GnomeRoutingModule } from './gnome-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GnomeRoutingModule,
  ],
  declarations: [GnomeListComponent],
})
export class GnomeModule {
}
