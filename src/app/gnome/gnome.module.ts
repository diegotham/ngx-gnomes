import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GnomeListComponent } from './containers/gnome-list/gnome-list.component';
import { GnomeRoutingModule } from './gnome-routing.module';
import { GnomesComponent } from './containers/gnomes';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { GnomeItemDialogComponent } from './containers/gnome-item-dialog/gnome-item-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    GnomeRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [GnomeListComponent, GnomesComponent, GnomeItemDialogComponent],
  entryComponents: [GnomeItemDialogComponent]
})
export class GnomeModule {
}
