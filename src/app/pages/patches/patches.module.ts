import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatchesPageRoutingModule } from './patches-routing.module';

import { PatchesPage } from './patches.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CarouselModule.forRoot(),
    PatchesPageRoutingModule
  ],
  declarations: [PatchesPage]
})
export class PatchesPageModule {}
