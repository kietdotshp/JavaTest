import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamJavaComponent } from './exam-java/exam-java.component';

const routes: Routes = [
  {
    path: "exam",
    component:ExamJavaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
