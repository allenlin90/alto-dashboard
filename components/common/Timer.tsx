import { useState, useEffect } from 'react';

export const Timer: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
};

export default Timer;
