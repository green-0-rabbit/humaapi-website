import { showNotification, NotificationProps } from '@mantine/notifications';

const customNotification = ({ ...props }) => {
  const { message } = props;
  return showNotification({
    ...props,
    message
  });
};
export default customNotification;
