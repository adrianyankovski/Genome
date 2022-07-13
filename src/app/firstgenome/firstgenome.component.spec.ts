import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstgenomeComponent } from './firstgenome.component';

describe('FirstgenomeComponent', () => {
  let component: FirstgenomeComponent;
  let fixture: ComponentFixture<FirstgenomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstgenomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstgenomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
