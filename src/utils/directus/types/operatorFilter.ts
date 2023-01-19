// operator
export type FilterOperators<T> = {
  _eq?: T;
  _neq?: T;
  _gt?: T;
  _gte?: T;
  _lt?: T;
  _lte?: T;
  _in?: T[];
  _nin?: T[];
  _between?: [T, T];
  _nbetween?: [T, T];
  _contains?: T;
  _ncontains?: T;
  _starts_with?: T;
  _nstarts_with?: T;
  _ends_with?: T;
  _nends_with?: T;
  _empty?: boolean;
  _nempty?: boolean;
  _nnull?: boolean;
  _null?: boolean;
  _intersects?: T;
  _nintersects?: T;
  _intersects_bbox?: T;
  _nintersects_bbox?: T;
};
