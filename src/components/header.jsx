import style from './header.module.css';
import Hamburger from './humberger';
function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.headerTitle}>taitoru</h1>
      <Hamburger></Hamburger>
    </div>
  );
}
export default Header;
