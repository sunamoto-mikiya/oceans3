
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { userIdAtom } from "../components/userIdAtom";
import { isLoginAtom } from "../components/isLoginAtom";
import Login from "../pages/Login";

export default function Header() {
  const [userId, setUserId] = useRecoilState(userIdAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();

  console.log("ユーザーID", userId);
  console.log("ログインフラグ", isLogin);

  return isLogin ? (
    <nav className="navbar f-container">
      <NavLink
        exact
        to="/"
        className="header-item f-item"
        activeClassName="active"
      >
        ホーム
      </NavLink>
      <NavLink
        to="/form"
        className="header-item f-item"
        activeClassName="active"
      >
        プロフィール入力
      </NavLink>
      <NavLink
        to="/rank"
        className="header-item f-item"
        activeClassName="active"
      >
        ユーザー一覧
      </NavLink>
    </nav>
  ) : (
    navigate("/login")
  );

}
