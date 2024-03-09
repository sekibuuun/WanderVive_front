import style from './header.module.css';
import Hamburger from './humberger';
function Header() {
  return (
    <div className={style.header}>
      <Hamburger />
      <h1 className={style.headerTitle}>WanderView</h1>
    </div>
  );
}
export default Header;
