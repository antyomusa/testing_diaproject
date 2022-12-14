import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from 'src/app/core/layouts/job-detail/job-detail.component';
import { JobFindComponent } from './job-find.component';

const routes: Routes = [
  {
    path: '',
    component: JobFindComponent
  },
  {
    path: "detail/:id",
    component: JobDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobFindRoutingModule { }
