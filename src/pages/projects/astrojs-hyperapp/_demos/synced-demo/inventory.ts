import makeSyncronizer from "astrojs-hyperapp/synced-islands"
import { type Action as HA_Action } from "hyperapp"

export type State = {
  inventory: {
    apples: number
    oranges: number
    bananas: number
  }
  current: "apples" | "oranges" | "bananas"
}
export type Action<P = any> = HA_Action<State, P>

export const inventory = makeSyncronizer<State>({
  init: {
    inventory: {
      apples: 0,
      bananas: 0,
      oranges: 0,
    },
    current: "apples",
  },
})
