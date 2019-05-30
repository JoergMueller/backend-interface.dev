import { ActivatableI, IConstructor } from './lib';

export function activator<T extends ActivatableI>(type: IConstructor<T>, ...args): T {
  return new type(...args);
}

/* --------------------------------------------------------------------------------- */
