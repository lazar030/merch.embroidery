import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimatePageRoutingModule } from './estimate-routing.module';

import { EstimatePage } from './estimate.page';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    EstimatePageRoutingModule
  ],
  declarations: [EstimatePage]
})
export class EstimatePageModule {}
