import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApparelPage } from './apparel.page';

const routes: Routes = [
  {
    path: '',
    component: ApparelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApparelPageRoutingModule {}
