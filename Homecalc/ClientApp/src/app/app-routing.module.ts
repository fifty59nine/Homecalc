import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordFormComponent } from './record-form/record-form.component';
import { RecordHistoryComponent } from './record-history/record-history.component';
import { DefpageComponent } from './defpage/defpage.component';

const routes: Routes = [
  { path: '', component: DefpageComponent },
  { path: 'history', component: RecordHistoryComponent },
  { path: 'write-record', component: RecordFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
