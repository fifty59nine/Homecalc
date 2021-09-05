import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { RecordHistoryComponent } from './record-history/record-history.component';
import { DefpageComponent } from './defpage/defpage.component';
import { Record } from './shared/record.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecordFormComponent,
    RecordHistoryComponent,
    DefpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Record, RecordFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
