import { patterns, TYPE_ATTRIBUTE } from './variables';

export const isOnBlacklist = (src: any, type: any) =>
  src &&
  (!type || type !== TYPE_ATTRIBUTE) &&
  (!patterns!.blacklist ||
    patterns!.blacklist.some((pattern: any) => pattern.test(src))) &&
  (!patterns!.whitelist ||
    patterns!.whitelist.every((pattern: any) => !pattern.test(src)));

export const willBeUnblocked = function (script: any) {
  const src = script.getAttribute('src');
  return (
    (patterns!.blacklist &&
      patterns!.blacklist.every((entry: any) => !entry.test(src))) ||
    (patterns!.whitelist &&
      patterns!.whitelist.some((entry: any) => entry.test(src)))
  );
};
