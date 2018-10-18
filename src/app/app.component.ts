import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import { LayoutActions } from './core/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    mat-sidenav {
      width: 300px;
    }
  `]
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  title = 'Brastlewark';

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
  }

  closeSidenav() {
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }
}
