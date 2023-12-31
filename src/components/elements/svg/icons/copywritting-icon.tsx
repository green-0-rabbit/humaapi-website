import { FC } from 'react';
import { createStyles } from '@mantine/core';

interface ICopywritting {
  text: string;
}

const useStyles = createStyles((theme) => ({
  strokIcon: { stroke: theme.colorScheme === 'dark' ? '#ffffff' : '#343434' },
  textWrite: { color: theme.colorScheme === 'dark' ? 'white' : '#343434' }
}));

const Copywritting: FC<ICopywritting> = (props) => {
  const { classes } = useStyles();

  const { text } = props;
  return (
    <div className="flex">
      <svg
        className="mt-1"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_267_84)">
          <path
            d="M8.15007 7.65004C7.89787 7.98368 7.57346 8.25595 7.20113 8.44644C6.8288 8.63694 6.4182 8.74073 6.00007 8.75004C5.64509 8.7515 5.29334 8.68265 4.9651 8.54748C4.63687 8.41231 4.33864 8.21348 4.08763 7.96247C3.83663 7.71147 3.6378 7.41324 3.50263 7.08501C3.36746 6.75677 3.29861 6.40502 3.30007 6.05004C3.293 5.54205 3.42874 5.04228 3.69182 4.60766C3.95491 4.17305 4.33476 3.82105 4.78812 3.59176C5.24148 3.36248 5.75012 3.26512 6.25611 3.31078C6.76209 3.35645 7.24508 3.54329 7.65007 3.85004"
            className={`${classes.strokIcon}`}
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6C11 6.98891 10.7068 7.95561 10.1573 8.77785C9.60794 9.6001 8.82705 10.241 7.91342 10.6194C6.99979 10.9978 5.99446 11.0969 5.02455 10.9039C4.05465 10.711 3.16373 10.2348 2.46447 9.53553C1.76521 8.83627 1.289 7.94536 1.09608 6.97545C0.90315 6.00555 1.00217 5.00021 1.3806 4.08658C1.75904 3.17295 2.39991 2.39206 3.22215 1.84265C4.0444 1.29324 5.0111 1 6 1C7.32608 1 8.59785 1.52678 9.53554 2.46447C10.4732 3.40215 11 4.67392 11 6Z"
            className={`${classes.strokIcon}`}
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_267_84">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className={`${classes.textWrite} mx-1 font-UbuntuRegular`}>
        {text}
      </span>
    </div>
  );
};
export default Copywritting;
