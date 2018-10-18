import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GnomesComponent } from './containers/gnomes';
import { GnomesService } from './services/gnomes.service';

export const routes: Routes = [
  { path: 'gnomes',
    component: GnomesComponent,
    resolve  : {
      gnomes: GnomesService
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GnomeRoutingModule {}
