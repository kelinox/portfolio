import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgChipComponent } from './img-chip.component';

describe('ImgChipComponent', () => {
  let component: ImgChipComponent;
  let fixture: ComponentFixture<ImgChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
