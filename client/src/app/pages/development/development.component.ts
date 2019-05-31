import { Component, OnInit } from "@angular/core";
import { SocketBackend } from "../../services/socket.service.helper";

import * as _ from "lodash";
import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-development",
  templateUrl: "./development.component.html",
  styleUrls: ["./development.component.scss"],
})
export class DevelopmentComponent implements OnInit {
  constructor(private socket: SocketBackend) {
    _.assignIn(window, { page: this });
  }

  ngOnInit() {
    ajax("https://api.github.com/users?per_page=10").pipe(
      map((userResponse) => {
        this.generateUsers(userResponse);
      }),
      catchError((error) => {
        console.log("error: ", error);
        return of(error);
      }),
    );
  }

  private generateUsers(response: any): void {
    for (const user of response) {
      this.socket.trigger("user:add", user);
    }
  }

  public getRandomUsers() {
    ajax("https://api.github.com/users?per_page=10").pipe(
      map((userResponse) => {
        this.generateUsers(userResponse);
      }),
      catchError((error) => {
        console.log("error: ", error);
        return of(error);
      }),
    );
  }
}
