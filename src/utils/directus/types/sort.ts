import { SingleItem } from './fitler';

export type Sort<T> = (
  | `${Extract<keyof SingleItem<T>, string>}`
  | `-${Extract<keyof SingleItem<T>, string>}`
)[];
