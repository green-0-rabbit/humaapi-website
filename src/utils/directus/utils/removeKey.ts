/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { CamelCasedPropertiesDeep } from 'type-fest';
import { DeepOmit } from '../types';
/**
 * Remove all specified keys from an object, no matter how deep they are.
 * The removal is done in place, so run it on a copy if you don't want to modify the original object.
 * This function has no limit so circular objects will probably crash the browser
 *
 * @param obj The object from where you want to remove the keys
 * @param keys An array of property names (strings) to remove
 */
// export const removeKey = <T extends Record<string, any>, K>(obj: T, key: K) => {
// //   console.log("test", obj !== Object(obj));

//   if (obj !== Object(obj)) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     obj.map((item) => removeKey(item, key));
//   }
//   Object.keys(obj)
//     .filter((k) => k !== key)
//     .reduce(
//       (acc, x) => Object.assign(acc, { [x]: removeKey(obj[x], key) }),
//       {}
//     );
// };

export /**
 * @param obj The object from where you want to remove the keys
 * @param keyToRemove An array of property names (strings) to remove
 */
const removeKey = <T extends Record<string, any>, K extends string>(
  obj: T,
  keyToRemove: K
): DeepOmit<T, K> =>
  JSON.parse(
    JSON.stringify(obj, (key, val) => (key === keyToRemove ? undefined : val))
  );
