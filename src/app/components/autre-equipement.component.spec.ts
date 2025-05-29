import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreEquipementComponent } from './autre-equipement.component';

describe('AutreEquipementComponent', () => {
  let component: AutreEquipementComponent;
  let fixture: ComponentFixture<AutreEquipementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutreEquipementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreEquipementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
