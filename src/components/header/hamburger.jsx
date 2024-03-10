import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Button,
  DrawerCloseButton,
} from '@chakra-ui/react';
import styles from '../../styles/hamburger.module.scss';
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
          <DrawerCloseButton />
          <DrawerHeader className={styles.lemon_header} borderBottomWidth="8px">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <a href="/" className={styles.lemon}>
              TOPへ
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default Hamburger;
