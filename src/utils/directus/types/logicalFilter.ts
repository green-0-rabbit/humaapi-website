/* eslint-disable import/no-cycle */
import { Filter } from './fitler';

// And , Or filter
type LogicalFilterAnd<T> = {
  _and: Filter<T>[];
};
type LogicalFilterOr<T> = {
  _or: Filter<T>[];
};

export type LogicalFilter<T> = LogicalFilterAnd<T> | LogicalFilterOr<T>;
