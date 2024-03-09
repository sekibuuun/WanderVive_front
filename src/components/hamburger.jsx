import {
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Button,
} from '@chakra-ui/react';
import styles from '../styles/hamburger.module.scss';
import { HamburgerIcon } from '@chakra-ui/icons';

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        className={styles.hamburger}
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className={styles.lemon_header} borderBottomWidth="8px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <a className={styles.lemon} href="/">
              TOPへ
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* <Menu>
        <MenuButton
          className={styles.hamburger}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<RepeatIcon />} command="">
            <a className={styles.lemon}>TOPへ</a>
          </MenuItem>
        </MenuList>
      </Menu> */}
    </>
  );
}
export default Hamburger;
