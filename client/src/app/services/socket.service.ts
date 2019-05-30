import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Socket } from "ng6-socket-io";

import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  constructor(private socket: { backend: Socket; communication: Socket }) {
    _.assignIn(window, { socket: this.socket });
  }

  public initSocket(): void {}

  public sendMessage(message: any): void {
    this.socket.communication.emit("message", message);
  }

  getMessage() {
    return this.socket.communication.fromEvent("message").subscribe((data) => {});
  }
}
