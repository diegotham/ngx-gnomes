import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeItemDialogComponent } from './gnome-item-dialog.component';

describe('GnomeItemDialogComponent', () => {
  let component: GnomeItemDialogComponent;
  let fixture: ComponentFixture<GnomeItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
