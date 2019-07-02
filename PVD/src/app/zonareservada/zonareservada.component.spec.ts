import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonareservadaComponent } from './zonareservada.component';

describe('ZonareservadaComponent', () => {
  let component: ZonareservadaComponent;
  let fixture: ComponentFixture<ZonareservadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonareservadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonareservadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
