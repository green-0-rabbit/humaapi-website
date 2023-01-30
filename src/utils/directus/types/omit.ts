/* eslint-disable @typescript-eslint/ban-types */
export type Primitive = string | number | boolean | undefined | null | {};

/**
 *  @see https://gist.github.com/ahuggins-nhs/826906a58e4c1e59306bc0792e7826d1
 */

/** Deeply omit members of an array of interface or array of type. */
export type DeepOmitArray<T extends object[], K> = {
  [P in keyof T]: DeepOmit<T[P], K>;
};

export type DeepOmit<T, K> = T extends Primitive
  ? T
  : {
      [P in Exclude<keyof T, K>]: T[P] extends infer TP
        ? TP extends Primitive[]
          ? TP
          : TP extends object[]
          ? DeepOmitArray<TP, K>
          : TP extends Primitive
          ? TP // leave primitives and functions alone
          : DeepOmit<TP, K>
        : never;
    };
