import type {
  CompositionEvent as ReactCompositionEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";

interface UseCompositionOptions<T> {
  onKeyDown?: (e: ReactKeyboardEvent<T>) => void;
  onCompositionStart?: (e: ReactCompositionEvent<T>) => void;
  onCompositionEnd?: (e: ReactCompositionEvent<T>) => void;
}

/**
 * Passes through IME composition-aware handlers to the underlying element.
 * Callers (Input/Textarea) already do their own composition-state checks
 * via e.nativeEvent.isComposing and the DialogComposition context, so this
 * hook simply exposes the handlers it was given under the expected names.
 */
export function useComposition<T = Element>(
  options: UseCompositionOptions<T> = {}
) {
  return {
    onKeyDown: options.onKeyDown,
    onCompositionStart: options.onCompositionStart,
    onCompositionEnd: options.onCompositionEnd,
  };
}
