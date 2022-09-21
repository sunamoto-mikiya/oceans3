import { atom } from "recoil";
import { localStorageEffect } from "./localStorageEffect";

export const userIdAtom = atom({
  key: "userId",
  default: undefined,
  effects: [localStorageEffect("user_id")],
});
