import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  // Creates a mutable ref object that persists for the lifetime of a component that calls this hook
  const savedCallback = useRef();

  // Sets the mutable ref object to store the passed callback. Updates the callback whenever it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Sets up interval. Updates the delay whenever it changes.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let interval = setInterval(tick, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);
}

export function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  });
  return ref.current;
}
