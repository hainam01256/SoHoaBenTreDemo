import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachHoSoChoDuyetComponent } from './danh-sach-ho-so-cho-duyet.component';

describe('DanhSachHoSoChoDuyetComponent', () => {
  let component: DanhSachHoSoChoDuyetComponent;
  let fixture: ComponentFixture<DanhSachHoSoChoDuyetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachHoSoChoDuyetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachHoSoChoDuyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
