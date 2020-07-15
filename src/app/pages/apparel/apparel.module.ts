import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApparelPageRoutingModule } from './apparel-routing.module';

import { ApparelPage } from './apparel.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ApparelPageRoutingModule
  ],
  declarations: [ApparelPage]
})
export class ApparelPageModule {}
