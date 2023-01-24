import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  strokIcon: { stroke: theme.colorScheme === 'dark' ? '#fff' : '#5D5D5D' }
}));

const WebdevIcon = () => {
  const { classes } = useStyles();

  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_103_418)">
        <path
          d="M14.49 4.5H39.4875C47.4975 4.5 49.5 6.5025 49.5 14.49V28.7325C49.5 36.7425 47.4975 38.7225 39.51 38.7225H14.49C6.5025 38.745 4.5 36.7425 4.5 28.755V14.49C4.5 6.5025 6.5025 4.5 14.49 4.5Z"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 38.745V49.5"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 29.25H49.5"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.875 49.5H37.125"
          className={`${classes.strokIcon}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_103_418">
          <rect width="54" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default WebdevIcon;
