import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTitleComponent } from './log-title.component';

describe('LogTitleComponent', () => {
  let component: LogTitleComponent;
  let fixture: ComponentFixture<LogTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
