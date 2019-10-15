import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WawawaComponent } from './wawawa.component';

describe('WawawaComponent', () => {
  let component: WawawaComponent;
  let fixture: ComponentFixture<WawawaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WawawaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WawawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
