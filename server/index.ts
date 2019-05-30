import restify from 'restify';
import * as socketIo from 'socket.io';
import * as dotenv from 'dotenv';

dotenv.config();

/* ----------------------------------------------- */

/* PROCESS THE ARGS
/* ----------------------------------------------- */

var args = {};
process.argv.forEach((arg) => {
  const _args = arg.match(/^--([^=]+)=(.+)$/);
  if (_args) args[_args[1]] = _args[2];
});
