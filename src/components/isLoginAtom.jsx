import { atom } from "recoil";
import { localStorageEffect } from "./localStorageEffect";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
  effects: [localStorageEffect("is_login")],
});
