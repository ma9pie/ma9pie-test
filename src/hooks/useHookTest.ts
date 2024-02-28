import { useEffect } from 'react';

const useHookTest = () => {
  useEffect(() => {
    console.log('useHook test');
  }, []);
  return {};
};

export { useHookTest };
