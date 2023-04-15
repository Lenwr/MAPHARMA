import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportLogistiqueComponent } from './transport-logistique.component';

describe('TransportLogistiqueComponent', () => {
  let component: TransportLogistiqueComponent;
  let fixture: ComponentFixture<TransportLogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportLogistiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportLogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
