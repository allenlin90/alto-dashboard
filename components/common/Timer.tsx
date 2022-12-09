import { useState, useEffect, useRef } from 'react';

export const Timer: React.FC = () => {
  const timerRef = useRef<NodeJS.Timeout>();
  const [time, setTime] = useState<string>(new Date().toString());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      timerRef.current = setInterval(() => {
        setTime(new Date().toString());
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, []);

  return <>{time}</>;
};

export default Timer;
