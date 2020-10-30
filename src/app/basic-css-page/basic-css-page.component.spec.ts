import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCssPageComponent } from './basic-css-page.component';

describe('BasicCssPageComponent', () => {
  let component: BasicCssPageComponent;
  let fixture: ComponentFixture<BasicCssPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCssPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCssPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
