import { Component, OnInit } from "@angular/core";
import { Action } from "../../model/action";
import { Event } from "../../model/event";

import { SocketService } from "../../services/socket.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();
  }

  public sendNotification(params: any, action: Action): void {}
}
