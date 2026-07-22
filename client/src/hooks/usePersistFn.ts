import { useCallback, useRef } from "react";

/**
 * Returns a stable function reference that always calls the latest version
 * of `fn`, without needing to include `fn` in dependency arrays.
 */
export function usePersistFn<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const persistFn = useRef((...args: Parameters<T>) => {
    return fnRef.current(...args);
  });

  return useCallback(persistFn.current, []) as T;
}
