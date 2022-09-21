import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { isLoginAtom } from "../components/isLoginAtom";

export default function Header() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();

  return isLogin ? (
    <nav className="navbar f-container">
      <NavLink
        end
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
