import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';

import { HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';

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
  );
}
export default Hamburger;
