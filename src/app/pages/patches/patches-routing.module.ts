import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatchesPage } from './patches.page';

const routes: Routes = [
  {
    path: '',
    component: PatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatchesPageRoutingModule {}
