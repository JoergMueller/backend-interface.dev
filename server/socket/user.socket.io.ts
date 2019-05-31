import { IOListenerI } from "../lib/lib";

import * as _ from "lodash";

export class UserSocketIO implements IOListenerI {
  private io: SocketIO.Server;

  /* ----------------------------------------------- */

  constructor(...args: any[]) {
    args.forEach(this.set);
  }

  /* ----------------------------------------------- */

  public get(index: string) {
    return _.has(this, index) ? this[index] : undefined;
  }

  public set(value: object) {
    _.assignIn(this, value);
  }

  /* ----------------------------------------------- */

  prepare() {
    this.io.on("connect", (socket: any) => {
      socket.on("user:get", (data) => {
        this.io.emit("message", "user:get .... ws triggerd");
      });
      socket.on("user:set", (data) => {
        this.io.emit("message", "user:set .... ws triggerd");
      });
      socket.on("user:add", (data) => {
        console.log(data);

        this.io.emit("message", "user:add .... ws triggerd");
      });
      socket.on("user:remove", (data) => {
        this.io.emit("message", "user:remove .... ws triggerd");
      });
    });
  }
}
