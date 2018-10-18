import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';

export const COMPONENTS = [
  SidenavComponent,
  NavItemComponent
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class CoreModule {
}
