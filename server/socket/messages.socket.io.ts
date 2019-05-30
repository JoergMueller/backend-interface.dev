import { IOListenerI } from '../lib/lib';

import * as _ from 'lodash';

export class MessagesSocketIO implements IOListenerI {
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
    this.io.on('connect', (socket: any) => {
      socket.on('messages:get', (data) => {
        this.io.emit('message', 'messages:get .... ws triggerd');
      });
      socket.on('messages:set', (data) => {
        this.io.emit('message', 'messages:set .... ws triggerd');
      });
      socket.on('messages:remove', (data) => {
        this.io.emit('message', 'messages:remove .... ws triggerd');
      });
    });
  }
}
