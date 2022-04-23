import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamJavaComponent } from '../exam-java/exam-java.component';

const routes: Routes = [
  {
    path: "exam",
    component:ExamJavaComponent,
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [HeaderComponent, FooterComponent]

})
export class ThemeModule { }
