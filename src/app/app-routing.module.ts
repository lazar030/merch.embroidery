import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'custom-embroidered-apparel',
    loadChildren: () =>
      import('./pages/apparel/apparel.module').then(m => m.ApparelPageModule)
  },
  {
    path: 'custom-embroidered-patches',
    loadChildren: () =>
      import('./pages/patches/patches.module').then(m => m.PatchesPageModule)
  },
  {
    path: 'estimate',
    loadChildren: () =>
      import('./pages/estimate/estimate.module').then(m => m.EstimatePageModule)
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms-of-service/terms-of-service.module').then(
        m => m.TermsOfServicePageModule
      )
  },
  {
    path: 'privacy',
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then(
        m => m.PrivacyPolicyPageModule
      )
  },
  {
    path: 'contact/view/:id',
    loadChildren: () =>
      import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
