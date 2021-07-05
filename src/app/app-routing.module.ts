import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioListComponent} from './components/portfolio-list/portfolio-list.component';

const routes: Routes = [{
  path: 'list', component: PortfolioListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
