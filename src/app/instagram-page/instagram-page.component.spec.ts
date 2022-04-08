import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPageComponent } from './instagram-page.component';

describe('InstagramPageComponent', () => {
  let component: InstagramPageComponent;
  let fixture: ComponentFixture<InstagramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
