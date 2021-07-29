import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDataResourcesComponent } from './block-data-resources.component';

describe('BlockDataResourcesComponent', () => {
  let component: BlockDataResourcesComponent;
  let fixture: ComponentFixture<BlockDataResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockDataResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockDataResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
