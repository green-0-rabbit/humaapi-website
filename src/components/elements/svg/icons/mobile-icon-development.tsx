import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  strokIcon: { stroke: theme.colorScheme === 'dark' ? '#fff' : '#5D5D5D' }
}));
const MobiledevIcon = () => {
  const { classes } = useStyles();
  return (
    <svg
      width="45"
      height="55"
      viewBox="0 0 45 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_103_429)">
        <path
          d="M43.0714 14.7093V40.2907C43.0714 50.5233 40.5 53.0814 30.2143 53.0814H14.7857C4.50002 53.0814 1.92859 50.5233 1.92859 40.2907V14.7093C1.92859 4.47675 4.50002 1.91861 14.7857 1.91861H30.2143C40.5 1.91861 43.0714 4.47675 43.0714 14.7093Z"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.6429 10.8721H17.3572"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.4857 41.6977C26.4857 42.4819 26.252 43.2485 25.814 43.9006C25.376 44.5527 24.7536 45.0609 24.0253 45.361C23.297 45.6611 22.4956 45.7396 21.7224 45.5866C20.9493 45.4336 20.2391 45.056 19.6817 44.5015C19.1243 43.9469 18.7447 43.2404 18.5909 42.4712C18.4371 41.7021 18.516 40.9048 18.8177 40.1803C19.1193 39.4558 19.6302 38.8365 20.2857 38.4008C20.9411 37.9651 21.7117 37.7326 22.5 37.7326C23.5571 37.7326 24.5709 38.1503 25.3183 38.8939C26.0658 39.6375 26.4857 40.6461 26.4857 41.6977V41.6977Z"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_429">
          <rect width="45" height="55" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default MobiledevIcon;
