import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocketIoModule } from "ng6-socket-io";
import { MomentModule } from "ngx-moment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserService, GlobalService, NetworkService } from "./services/index";
import { SocketBackend, SocketCommunication, configBackend } from "./services/socket.service.helper";

import { HomeComponent } from "./pages/home/home.component";
import { DevelopmentComponent } from "./pages/development/development.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, DevelopmentComponent],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(configBackend), MomentModule.forRoot()],
  providers: [UserService, GlobalService, NetworkService, SocketBackend, SocketCommunication],
  bootstrap: [AppComponent],
})
export class AppModule {}
