import { useState, useEffect } from 'react';

// TODO: define Notification object
export const useNotifications = (initData: any[]): any[] => {
  const [notifications, _setNotifications] = useState(initData);

  useEffect(() => {
    // TODO: decide using polling, SSE, or websocket to request latest notifications
    // TODO: check if pagination is required
  }, []);

  return notifications;
};

export default useNotifications;
