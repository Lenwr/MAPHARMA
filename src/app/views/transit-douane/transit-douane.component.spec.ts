import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDouaneComponent } from './transit-douane.component';

describe('TransitDouaneComponent', () => {
  let component: TransitDouaneComponent;
  let fixture: ComponentFixture<TransitDouaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitDouaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransitDouaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
