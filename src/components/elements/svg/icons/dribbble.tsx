/* eslint-disable react-hooks/rules-of-hooks */
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  fillIcon: { fill: theme.colorScheme === 'dark' ? '#fff' : '#343434' }
}));

const Dribbble = () => {
  const { classes } = useStyles();

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classes.fillIcon}`}>
      <path d="M12.5 25C5.60547 25 0 19.3977 0 12.5049C0 5.60227 5.60547 0 12.5 0C19.3945 0 25 5.60227 25 12.4951C25 19.388 19.3945 25 12.5 25ZM23.0371 14.2061C22.6758 14.0888 19.7363 13.2186 16.3867 13.7466C17.7832 17.5792 18.3496 20.7079 18.457 21.3531C20.8594 19.7399 22.5684 17.1783 23.0371 14.2061ZM16.6699 22.3406C16.5137 21.402 15.8887 18.1365 14.3945 14.2452C14.375 14.255 14.3457 14.2648 14.3262 14.2648C8.30078 16.3668 6.14258 20.5417 5.94727 20.9327C7.75391 22.3406 10.0293 23.1815 12.5 23.1815C13.9746 23.1912 15.3906 22.8882 16.6699 22.3406ZM4.57031 19.6519C4.81445 19.2413 7.74414 14.3919 13.252 12.6027C13.3887 12.5538 13.5352 12.5147 13.6719 12.4756C13.4082 11.8694 13.1152 11.2632 12.8027 10.6668C7.4707 12.2605 2.29492 12.192 1.82617 12.1822C1.82617 12.2898 1.81641 12.3973 1.81641 12.5049C1.82617 15.2522 2.86133 17.7552 4.57031 19.6519ZM2.05078 10.3246C2.5293 10.3344 6.92383 10.3539 11.9238 9.02425C10.1562 5.87603 8.24219 3.23621 7.96875 2.85491C4.9707 4.26281 2.74414 7.01995 2.05078 10.3246ZM10 2.1314C10.293 2.52249 12.2363 5.1623 13.9844 8.37896C17.7832 6.95151 19.3848 4.80055 19.5801 4.52679C17.6953 2.85491 15.2148 1.83809 12.5 1.83809C11.6406 1.83809 10.8008 1.94564 10 2.1314ZM20.7617 5.7587C20.5371 6.06179 18.75 8.35941 14.8047 9.97262C15.0488 10.481 15.293 10.9992 15.5176 11.5174C15.5957 11.7032 15.6738 11.8889 15.752 12.0649C19.3066 11.6152 22.832 12.3387 23.1836 12.4071C23.1543 9.89441 22.2559 7.57724 20.7617 5.7587Z" />
    </svg>
  );
};
export default Dribbble;
