import * as Widget from "test-widget";
import { useEffect, useRef } from "react";

export function WidgetBridge() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) Widget.render(ref.current);
  }, [ref.current]);
  return <div ref={ref} />;
}
