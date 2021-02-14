import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverProblemaComponent } from './resolver-problema.component';

describe('ResolverProblemaComponent', () => {
  let component: ResolverProblemaComponent;
  let fixture: ComponentFixture<ResolverProblemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverProblemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
