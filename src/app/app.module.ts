import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomRouterStateSerializer } from './core/utils/utils';

import { GnomeModule } from './gnome/gnome.module';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        GnomeModule,
        AppRoutingModule,
        FlexLayoutModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({
          stateKey: 'router',
        }),
        StoreDevtoolsModule.instrument({
            name: 'NgRx Brastlewark Store DevTools',
            logOnly: environment.production,
          }),
        HttpClientModule,
        MaterialModule,
    ],
    providers: [
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule {
}
