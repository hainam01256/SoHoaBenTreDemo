import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemHoSoComponent } from './them-ho-so.component';

describe('ThemHoSoComponent', () => {
  let component: ThemHoSoComponent;
  let fixture: ComponentFixture<ThemHoSoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemHoSoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemHoSoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
