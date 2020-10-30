import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicCssPageComponent } from './basic-css-page/basic-css-page.component';
import { BootstrapPageComponent } from './bootstrap-page/bootstrap-page.component';

const routes: Routes = [
  { path: 'bootstrap', component: BootstrapPageComponent },
  { path: 'basic', component: BasicCssPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
