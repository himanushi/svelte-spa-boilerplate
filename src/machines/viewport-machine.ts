/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */

// fix 100vh
// ref: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

import {
  interpret, Machine as machine
} from "xstate";

export type Schema = {
  states: {
    idle: {};
    active: {};
  };
};

export type Event = { type: "INIT_RESIZE" };

const resize = () => {

  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

};

export const Machine = machine<{}, Schema, Event>({
  id: "viewport",

  initial: "idle",

  on: { INIT_RESIZE: "active" },

  states: {
    idle: { entry: [() => window.addEventListener("resize", resize)] },
    active: { entry: [resize] }
  }
});

export const viewportService = interpret(Machine).start();
