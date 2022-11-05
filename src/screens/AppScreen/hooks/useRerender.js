import { useState } from 'react';
import { WORK_TIMER } from 'singletons';

const useRerender = () => {
  WORK_TIMER.start = Date.now();
  const rerender = useState(false)[1];
  return () => rerender((v) => !v);
};

export { useRerender };
