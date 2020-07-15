import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatchesPage } from './patches.page';

describe('PatchesPage', () => {
  let component: PatchesPage;
  let fixture: ComponentFixture<PatchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
