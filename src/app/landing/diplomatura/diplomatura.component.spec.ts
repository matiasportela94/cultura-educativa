import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaturaComponent } from './diplomatura.component';

describe('DiplomaturaComponent', () => {
  let component: DiplomaturaComponent;
  let fixture: ComponentFixture<DiplomaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
