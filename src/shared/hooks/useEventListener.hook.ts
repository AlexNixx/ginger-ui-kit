import { useEffect, useRef } from 'react';

type EventListenerCallback = (event: Event) => void;

export function useEventListener(
  eventType: string,
  callback: EventListenerCallback,
  element: HTMLElement | Window | Document = window
): void {
  const callbackRef = useRef<EventListenerCallback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
