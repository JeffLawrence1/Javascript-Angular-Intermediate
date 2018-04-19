import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongurldumbdumbComponent } from './wrongurldumbdumb.component';

describe('WrongurldumbdumbComponent', () => {
  let component: WrongurldumbdumbComponent;
  let fixture: ComponentFixture<WrongurldumbdumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrongurldumbdumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongurldumbdumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
