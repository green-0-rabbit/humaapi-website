import {
  blockDynamicScript,
  startMonitoring,
  unblock
} from 'src/utils/cookieBlocker';

const useCookieBlocker = () => ({
  startMonitoring,
  blockDynamicScript,
  unblock
});

export default useCookieBlocker;
