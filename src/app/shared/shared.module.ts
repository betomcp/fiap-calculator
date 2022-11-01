import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './components/subject/subject.component';
import { FormsModule } from '@angular/forms';
import { NameModalComponent } from './components/name-modal/name-modal.component';



@NgModule({
  declarations: [
    SubjectComponent,
    NameModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SubjectComponent,
    NameModalComponent
  ]
})
export class SharedModule { }
