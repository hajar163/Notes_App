import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './layouts/body/body.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

const routes: Routes = [
  {path: '' , component: BodyComponent},
  {path: 'note-details' , component: NoteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
