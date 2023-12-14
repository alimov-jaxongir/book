import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersIDComponent } from './ordersID.component';

describe('OrdersIDComponent', () => {
  let component: OrdersIDComponent;
  let fixture: ComponentFixture<OrdersIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
