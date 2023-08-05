import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import colors from '../../assets/styles/colors';

type CustomMenuProps = {
  setData: (x: string) => void;
  data: any;
};

const Index = ({ setData, data }: CustomMenuProps) => {
  const dropDownList = ['Unassigned', 'Rick', 'jerry', 'Beth'];
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
            {data.assigneeName || 'Unassigned'}
          </MenuButton>
          <MenuList>
            {dropDownList.map((item) => (
              <MenuItem
                key={`${Math.random()}-${item}`}
                onClick={() => setData({ ...data, assigneeName: item })}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Index;
