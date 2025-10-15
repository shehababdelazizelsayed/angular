import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { HomeModule } from './home/home-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
