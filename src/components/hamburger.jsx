import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import styles from '../styles/hamburger.module.css';

import { HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

function Hamburger() {
  return (
    <>
      <Menu>
        <MenuButton className={styles.hamburger} as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
        <MenuList>
          <MenuItem icon ={<RepeatIcon />} command="">
            <a className={styles.lemon}>TOPへ</a>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
export default Hamburger;
