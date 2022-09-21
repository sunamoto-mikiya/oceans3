import { atom, RecoilRoot, useRecoilState } from "recoil";

export const isLoginAtom = atom({
  key: "isLogin",
  default: false,
});
