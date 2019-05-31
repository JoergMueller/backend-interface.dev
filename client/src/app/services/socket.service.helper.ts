import { Injectable, NgZone, ModuleWithComponentFactories } from "@angular/core";
import { SocketIoConfig, Socket } from "ng6-socket-io";

import * as moment from "moment";


declar const  Moment;
export const configBackend: SocketIoConfig = { url: "ws://localhost:3128", options: {} };

@Injectable()
export class SocketBackend extends Socket {
  constructor(ngZone: NgZone) {
    super(configBackend, ngZone);
  }

  getMessage() {
    return this.fromEvent("message").subscribe((data) => {});
  }
}

export const configCommunication: SocketIoConfig = { url: "ws://localhost:3129", options: {} };

@Injectable()
export class SocketCommunication extends Socket {
  sendMessages: any = false;

  constructor(ngZone: NgZone) {
    super(configCommunication, ngZone);
  }

  sendMessage(msg: string) {
    this.sendMessages.push({
      stamp: Moment().format("YYYY-mm-dd"),
    });
    this.emit("message", msg);
  }

  getMessage() {
    return this.fromEvent("message").subscribe((data) => {});
  }
}
