import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import colors from '../../assets/styles/colors';

const Index = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            variant='unstyled'
            textColor={colors.fiord}
            fontSize={13}
          >
            Unassigned
          </MenuButton>
          <MenuList>
            <MenuItem>Unassigned</MenuItem>
            <MenuItem>Rick</MenuItem>
            <MenuItem>Jerry</MenuItem>
            <MenuItem>Beth</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Index;
