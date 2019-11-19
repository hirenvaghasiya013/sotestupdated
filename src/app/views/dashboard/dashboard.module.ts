import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { QuestionsListComponent } from 'src/app/features/questions-list/questions-list.component';
import { ProfileComponent } from 'src/app/features/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,    
    QuestionsListComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
