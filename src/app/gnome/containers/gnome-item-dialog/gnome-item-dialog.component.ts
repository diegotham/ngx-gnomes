import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Gnome } from '../../models/gnome';

@Component({
  selector: 'app-gnome-item-dialog',
  templateUrl: './gnome-item-dialog.component.html',
  styleUrls: ['./gnome-item-dialog.component.scss']
})
export class GnomeItemDialogComponent implements OnInit {
  gnome: Gnome;
  /**
   * Constructor
   *
   * @param {MatDialogRef<GnomeItemDialogComponent>} matDialogRef
   * @param _data
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    public matDialogRef: MatDialogRef<GnomeItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
  ) { }

  ngOnInit() {
    this.gnome = this._data.gnome;
  }

}
