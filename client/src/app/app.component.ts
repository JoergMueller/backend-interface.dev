import { Component, OnInit } from "@angular/core";
import { SocketCommunication, SocketBackend } from "./services/socket.service.helper";

/* ----------------------------------------------- */

import * as _ from "lodash";

/* ----------------------------------------------- */

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /* ----------------------------------------------- */

  startDate: Date = new Date();

  /* ----------------------------------------------- */

  constructor(private sockC: SocketCommunication, private sockB: SocketBackend) {
    _.assignIn(window, { sockB, sockC });
    this.sockB.emit("user:get");
  }

  /* ----------------------------------------------- */

  ngOnInit() {
    this.sockC.sendMessage("#########");
  }
}
