import { useNotifications } from 'hooks/useNotifications';
import NotificationDrawer from './notification/NotificationDrawer';

export interface NotificationsProps {
  notifications: any[]; // TODO: update with defined Notification object
}

export const Notifications: React.FC<NotificationsProps> = ({
  notifications: iniData,
}) => {
  const notifications = useNotifications(iniData);

  return (
    <>
      <div>Alert icon</div>
      {/* TODO check Notification structure and separate read/unread notifications */}
      <div>{notifications.length}</div>
      <NotificationDrawer notifications={notifications} />
    </>
  );
};

export default Notifications;
