// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <nav className='navbar f-container'>
          <NavLink exact to='/' className='header-item f-item' activeClassName='active'>ホーム</NavLink>
          <NavLink to='/form' className='header-item f-item' activeClassName='active'>プロフィール入力</NavLink>
          <NavLink to='/rank' className='header-item f-item' activeClassName='active'>ユーザー一覧</NavLink>
        </nav>
    )
}
