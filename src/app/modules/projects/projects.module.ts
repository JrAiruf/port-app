import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
