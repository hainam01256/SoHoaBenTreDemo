import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuyetHoSoComponent } from './duyet-ho-so.component';

describe('DuyetHoSoComponent', () => {
  let component: DuyetHoSoComponent;
  let fixture: ComponentFixture<DuyetHoSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuyetHoSoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuyetHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
