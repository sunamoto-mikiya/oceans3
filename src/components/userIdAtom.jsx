import { atom, RecoilRoot, useRecoilState } from "recoil";

export const userIdAtom = atom({
  key: "userId",
  default: "",
});
