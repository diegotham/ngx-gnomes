import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    template: `
    <mat-nav-list>
        <app-nav-item (navigate)="closeMenu.emit()" *ngIf="loggedIn" routerLink="/" icon="home" hint="Go to home">
            Home
        </app-nav-item>
        <app-nav-item (navigate)="closeMenu.emit()" *ngIf="!(loggedIn)">
            Sign In
        </app-nav-item>
        <app-nav-item (navigate)="logout.emit()" *ngIf="loggedIn">
            Sign Out
        </app-nav-item>
    </mat-nav-list>
    `,
})
export class SidenavComponent implements OnInit {
    @Input() loggedIn;
    @Output() logout = new EventEmitter();
    @Output() closeMenu = new EventEmitter();
    constructor() { }

    ngOnInit(): void { }
}
