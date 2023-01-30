/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import { IPatterns } from './type';

export const TYPE_ATTRIBUTE = 'javascript/blocked';

const generatePatterns = () => {
  if (typeof window !== 'undefined') {
    const patterns: IPatterns = {
      blacklist: [],
      whitelist: []
    };
    return patterns;
  }
};
export const patterns = generatePatterns();
// Backup list containing the original blacklisted script elements
interface IBackupScripts {
  blacklisted: any[];
}
export const backupScripts: IBackupScripts = {
  blacklisted: []
};
