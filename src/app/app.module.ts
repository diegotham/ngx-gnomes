import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GnomeModule } from './gnome/gnome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    GnomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
