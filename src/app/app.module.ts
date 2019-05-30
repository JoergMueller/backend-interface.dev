import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService, GlobalService, NetworkService } from './services/index';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService, GlobalService, NetworkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
