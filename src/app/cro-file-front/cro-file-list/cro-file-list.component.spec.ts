import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroFileListComponent } from './cro-file-list.component';

describe('CroFileListComponent', () => {
  let component: CroFileListComponent;
  let fixture: ComponentFixture<CroFileListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroFileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
