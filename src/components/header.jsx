import style from '../styles/header.module.css';
import Hamburger from './hamburger';

function Header() {
  return (
    <div className={style.header}>
      <Hamburger />
      <h1 className={style.headerTitle}>WanderVive</h1>
    </div>
  );
}
export default Header;
