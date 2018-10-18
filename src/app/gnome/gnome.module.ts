import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GnomeListComponent } from './containers/gnome-list/gnome-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [GnomeListComponent],
})
export class GnomeModule {
}
