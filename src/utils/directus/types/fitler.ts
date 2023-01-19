/* eslint-disable import/no-cycle */
import { LogicalFilter } from './logicalFilter';
import { FilterOperators } from './operatorFilter';

type ID = string | number;
export type SingleItem<T> = Exclude<Single<T>, ID>;
type Single<T> = T extends Array<unknown> ? T[number] : T;

export type FieldFilter<T> = {
  [K in keyof SingleItem<T>]?:
    | FilterOperators<SingleItem<T>[K]>
    | FieldFilter<SingleItem<T>[K]>;
};

export type Filter<T> = LogicalFilter<T> | FieldFilter<T>;
