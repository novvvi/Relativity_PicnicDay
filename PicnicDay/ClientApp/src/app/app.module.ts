import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { SearchComponent } from "./search/search.component";
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
