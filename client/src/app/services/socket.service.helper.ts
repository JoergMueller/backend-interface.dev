import { Injectable, NgZone, ModuleWithComponentFactories } from "@angular/core";
import { SocketIoConfig, Socket } from "ng6-socket-io";

import * as moment from "moment";

export const configBackend: SocketIoConfig = { url: "ws://localhost:3128", options: {} };

@Injectable()
export class SocketBackend extends Socket {
  constructor(ngZone: NgZone) {
    super(configBackend, ngZone);
  }

  trigger(chanel: string, data?: any) {
    this.emit(chanel, data);
  }

  getMessage() {
    return this.fromEvent("message").subscribe((data) => {});
  }
}

export const configCommunication: SocketIoConfig = { url: "ws://localhost:3129", options: {} };

@Injectable()
export class SocketCommunication extends Socket {
  sendMessages: any[] = [];

  constructor(ngZone: NgZone) {
    super(configCommunication, ngZone);
  }

  sendMessage(msg: string) {
    this.sendMessages.push({
      stamp: moment().unix(),
      message: msg,
    });
    this.emit("message", msg);
  }

  getMessage() {
    return this.fromEvent("message").subscribe((data) => {});
  }
}
