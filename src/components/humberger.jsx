import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';

import {HamburgerIcon,  RepeatIcon, } from '@chakra-ui/icons';
// import styles from './humberger.module.css';
// import humberIcon from './humber.svg';

// function Hamburger() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   function handleClick() {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   console.log(isMenuOpen);
// return (
//     <div className="hamburger-menu" onClick={handleClick}>
//       <div className={`line ${isMenuOpen
//         ? 'open'
//         : ''}`}></div>
//       <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
//       <div className={`line ${isMenuOpen ? 'open' : ''}`}>もも</div>
//     </div>
//   );

function Hamburger() {
  return (
    <>
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
        <MenuList>

          <MenuItem icon={<RepeatIcon />} command="">
            Topへ
          </MenuItem>

        </MenuList>
      </Menu>
    </>

    // <div className={styles.Humburger}>
    //   <img onClick={handleClick} src={humberIcon} />
    //   {isMenuOpen ? <HamburgerMnu /> : null}
    // </div>
  );
}
// }
export default Hamburger;

// // function HamburgerMnu() {
//   return (
//     <ul>
//       <li>
//         <a href="#">近くのライブハウス</a>
//       </li>
//       <li>
//         <a href="#">Top</a>
//       </li>
//       <li>
//         <a href="#">エリア</a>
//       </li>
//     </ul>
//   );
// }
