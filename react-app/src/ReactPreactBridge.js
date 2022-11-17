import React, { useRef, useEffect } from "react";
import { render, h, VNode } from "preact";
import Fresh from "fresh-start";
import Component from "test";

export function ReactPreactBridge() {
  // Get the raw DOM node to render into
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Can't use two different JSX constructors in
      // the same file, so we're writing the JSX output
      // manually. (h is the same as createElement)
      render(h(Component, null), ref.current);
    }

    return () => {
      // Clear Preact rendered tree when the parent React
      // component unmounts
      render(null, ref.current);
    };
  }, [ref.current]);

  return <div ref={ref} />;
}
