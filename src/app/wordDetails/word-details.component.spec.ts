import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

import { WordDetailsComponent } from './word-details.component';
import { WordDetailsService } from './word-details.service';
import { ISearch } from '../search/search';

describe('WordDetailsComponent', () => {
  let component: WordDetailsComponent;
  let fixture: ComponentFixture<WordDetailsComponent>;
  const routes: Routes = [
    { path: 'details', component: WordDetailsComponent }
  ];
  const details: ISearch = {
    metadata: { provider: "Oxford University Press" },
    results: [
      {
        lexicalEntries: [
          {
            entries: [
              {
                senses: [
                  {
                    definitions: ["a test definition"]
                  }
                ]
              }
            ],
            lexicalCategory: "Noun",
            pronunciations: [
              {
                audioFile: 'https://x.com/',
                phoneticSpelling: "ɡeɪm"
              }
            ]
          }
        ],
        word: 'test'
      }
    ]
  };
  class MockWordDetailsService {
    wordDetails: ISearch = details
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordDetailsComponent ],
      providers: [
        { provide: WordDetailsService, useClass: MockWordDetailsService }],
      imports: [RouterModule.forRoot(routes)]
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
    const component = fixture.componentInstance;
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

  it('should render audio tag', () => {
    const fixture = TestBed.createComponent(WordDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const audioFile = details.results[0].lexicalEntries[0].pronunciations[0].audioFile;
    expect(compiled.querySelector('audio').src).toEqual(audioFile);
  });
});
