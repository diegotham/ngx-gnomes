import { Component, OnInit, OnDestroy } from '@angular/core';
import { GnomesService } from '../services/gnomes.service';
import { Observable, Subject } from 'rxjs';
import { Gnome } from '../models/gnome';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-gnomes',
    template: `
        <app-gnome-list *ngIf="gnomes" [gnomes]="gnomes"></app-gnome-list>
    `
})
export class GnomesComponent implements OnInit, OnDestroy {
    private _unsubscribeAll = new Subject();
    gnomes;

    constructor(private gnomesService: GnomesService) { }

    ngOnInit(): void {
        this.gnomesService.onGnomesChanged
            .pipe(takeUntil(this._unsubscribeAll))
                .subscribe(gnomes => {
                    this.gnomes = gnomes;
                });
    }
    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
