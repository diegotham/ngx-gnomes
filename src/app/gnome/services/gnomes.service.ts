import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Gnome } from '../models/gnome';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GnomesService implements Resolve<any> {
    dataUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    onGnomesChanged: BehaviorSubject<any>;
    onSearchTextChanged: Subject<any>;
    onFilterChanged: Subject<any>;

    gnomes: Gnome[];

    searchText: string;
    filterBy: string;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
    ) {
        // Set the defaults
        this.onGnomesChanged = new BehaviorSubject([]);
        this.onSearchTextChanged = new Subject();
        this.onFilterChanged = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getGnomes()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.searchText = searchText;
                        this.getGnomes();
                    });

                    this.onFilterChanged.subscribe(filter => {
                        this.filterBy = filter;
                        this.getGnomes();
                    });

                    resolve();

                },
                reject
            );
        });
    }

    /**
     * Get gnomes
     *
     * @returns {Promise<any>}
     */
    getGnomes(): Promise<any> {
        return new Promise((resolve, reject) => {
            return this._httpClient.get(this.dataUrl)
                    .subscribe((res: any) => {
                        this.gnomes = res.Brastlewark;
console.log('gnomessss', this.gnomes);
                        this.onGnomesChanged.next(this.gnomes);
                        resolve(this.gnomes);
                    }, reject);
            }
        );
    }
}
