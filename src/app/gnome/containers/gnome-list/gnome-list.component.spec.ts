import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeListComponent } from './gnome-list.component';

describe('GnomeListComponent', () => {
  let component: GnomeListComponent;
  let fixture: ComponentFixture<GnomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
