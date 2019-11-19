import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsListComponent } from 'src/app/features/questions-list/questions-list.component';
import { ProfileComponent } from 'src/app/features/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', redirectTo: 'questions', pathMatch: 'full' },
      { path: '', component: QuestionsListComponent },
      { path: 'questions', component: QuestionsListComponent },
      { path: 'profile/:id', component: ProfileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
