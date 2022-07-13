import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstgenomeComponent } from './firstgenome/firstgenome.component';
import { SecondgenomeComponent } from './secondgenome/secondgenome.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstgenomeComponent,
    SecondgenomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
