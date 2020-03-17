import { createServer, Server } from "http";
import * as express from "express";
import * as socketIo from "socket.io";
import * as dotenv from "dotenv";
import * as path from "path";
import { readdirSync } from "fs";

import { IOListenerI } from "./lib";
import { activator } from "./types";
import { Utils } from "./utils";

import * as _ from "lodash";

dotenv.config();

export class SocketServer {
  public static readonly PORT: string | number = process.env.BackendSocketPORT;
  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  utils: Utils = activator(Utils);

  private listenerFiles: string[] = [];
  private listener: IOListenerI[] = [];

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private config(): void {
    this.port = process.env.BackendSocketPORT || SocketServer.PORT;
  }

  private sockets(): void {
    this.io = socketIo(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log("Running server on port %s", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("Connected client on port %s.", this.port);

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });

      this.loadIoListener();
    });
  }

  async loadIoListener(f: string = "") {
    const _folder = f.length <= 0 ? path.resolve("./socket/") : f;

    await readdirSync(_folder).forEach((file) => {
      this.listenerFiles.push(file);

      const name = this.validateName(file);
      if (name) {
        let _className = this.utils.camelize(name);
        const _class = require([_folder, name].join("/"));
        _.assignIn(
          this,
          _.mapValues(_class, (value) => {
            return activator(value);
          }),
        );
      }
    });
  }

  validateName(file: string, allowedExt: string[] = ["ts", "js"]): string | boolean {
    const { name, ext } = path.parse(file);
    if (ext.length === 0 || name.length === 0) {
      return false;
    }

    if (allowedExt.length > 0 && allowedExt.indexOf(ext.substr(1)) === -1) {
      return false;
    }
    return name;
  }

  public getApp(): express.Application {
    return this.app;
  }

  /**
   * get
   */
  public get(index: string) {
    return _.has(this, index) ? this[index] : undefined;
  }

  public set(value: object) {
    _.assignIn(this, value);
  }
}
