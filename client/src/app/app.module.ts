import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable, NgZone } from "@angular/core";

import { SocketIoModule, SocketIoConfig, Socket } from "ng6-socket-io";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { UserService, GlobalService, NetworkService } from "./services/index";
import { HomeComponent } from "./pages/home/home.component";

const configBackend: SocketIoConfig = { url: "ws://localhost:3128", options: {} };

@Injectable()
export class SocketBackend extends Socket {
  constructor(ngZone: NgZone) {
    super(configBackend, ngZone);
  }
}

const configCommunication: SocketIoConfig = { url: "ws://localhost:3129", options: {} };

@Injectable()
export class SocketCommunication extends Socket {
  constructor(ngZone: NgZone) {
    super(configCommunication, ngZone);
  }

  sendMessage(msg: string) {
    this.emit("message", msg);
  }

  getMessage() {
    return this.fromEvent("message").subscribe((data) => {});
  }
}

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(configBackend)],
  providers: [UserService, GlobalService, NetworkService, SocketBackend, SocketCommunication],
  bootstrap: [AppComponent],
})
export class AppModule {}
