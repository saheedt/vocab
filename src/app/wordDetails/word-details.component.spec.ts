import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDetailsComponent } from './word-details.component';

describe('WordDetailsComponent', () => {
  let component: WordDetailsComponent;
  let fixture: ComponentFixture<WordDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a button tag', () => {
    const fixture = TestBed.createComponent(WordDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });
  it('should render title in a button with appropriate label', () => {
    const fixture = TestBed.createComponent(WordDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Back');
  });
});
