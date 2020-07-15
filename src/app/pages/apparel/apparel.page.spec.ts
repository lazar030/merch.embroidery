import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApparelPage } from './apparel.page';

describe('ApparelPage', () => {
  let component: ApparelPage;
  let fixture: ComponentFixture<ApparelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApparelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
