// import habitat from 'preact-habitat';

// import Widget from './component';

// const _habitat = habitat(Widget);

// _habitat.render({
//   selector: '[data-widget-host="habitat"]',
//   clean: true
// });

import * as Preact from "preact";
import { h } from "preact";
import App from "./component";

type Ref = Parameters<typeof Preact.render>[1];

export function render(ref: Ref): void {
  return Preact.render(<App />, ref);
}
