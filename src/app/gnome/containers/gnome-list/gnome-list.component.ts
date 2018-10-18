import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, Input } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Gnome } from '../../models/gnome';
import { GnomeItemDialogComponent } from '../gnome-item-dialog/gnome-item-dialog.component';

@Component({
    selector     : 'app-gnome-list',
    templateUrl  : './gnome-list.component.html',
    styleUrls    : ['./gnome-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GnomeListComponent implements OnInit, OnDestroy {
    @Input() gnomes: Gnome[];
    dataSource: MatTableDataSource<Gnome>;
    displayedColumns = ['thumbnail', 'name', 'age', 'weight', 'height'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Constructor
     *
     * @param {MatDialog} _matDialog
     */
    constructor(
        public _matDialog: MatDialog
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<Gnome>(this.gnomes);
        this.dataSource.paginator = this.paginator;
    }

    errorHandler(event): string {
        return event.target.src = '/assets/images/profile.jpg';
    }

    openGnomeInfo(gnome: Gnome) {
      this._matDialog.open(GnomeItemDialogComponent, {
        panelClass: 'gnome-dialog',
        data      : {
            gnome: gnome
        }
      });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
    }
}

