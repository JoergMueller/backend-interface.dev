import { activator } from './lib/types';
import * as dotenv from 'dotenv';

dotenv.config();

import { Utils } from './lib/utils';
const _utils: Utils = activator(Utils);

/* ----------------------------------------------- */

/* PROCESS THE ARGS
/* ----------------------------------------------- */

var args = {};
process.argv.forEach((arg) => {
  const _args = arg.match(/^--([^=]+)=(.+)$/);
  if (_args) args[_args[1]] = _args[2];
});

import { ChatServer } from './lib/chat-server';
const _chatServer: ChatServer = new ChatServer();

import { SocketServer } from './lib/socket-server';
const _socketServer: SocketServer = new SocketServer();
