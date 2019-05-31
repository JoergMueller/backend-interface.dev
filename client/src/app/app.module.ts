import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SocketIoModule } from "ng6-socket-io";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserService, GlobalService, NetworkService } from "./services/index";
import { SocketBackend, SocketCommunication, configBackend } from "./services/socket.service.helper";

import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(configBackend)],
  providers: [UserService, GlobalService, NetworkService, SocketBackend, SocketCommunication],
  bootstrap: [AppComponent],
})
export class AppModule {}
