import React from 'react';
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import cardLogo from '../assets/images/Icon.png';
import colors from '../assets/styles/colors';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Cards = () => {
  return (
    <Card
      direction={{ base: 'row', sm: 'row' }}
      overflow='hidden'
      variant='elevated'
      paddingX={10}
      paddingY={3}
      maxW={{ base: '100%' }}
      size='sm'
      alignItems='center'
      // boxShadow='md'
      // marginBottom={5}
    >
      <Image
        objectFit='contain'
        maxW={{ base: '100%', sm: '80px' }}
        maxH={{ base: '100px', sm: '80px' }}
        src={cardLogo}
        alt='Caffe Latte'
      />

      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w='100%'
        alignItems='center'
      >
        <CardBody>
          <Heading size='md'>Task Title</Heading>

          <Text py='2' color={colors.gullGray}>
            Assignee * Creation Date 10 Sep 10, 4:30
          </Text>
        </CardBody>
        <Box
          border={1}
          borderLeftStyle='solid'
          borderLeftColor={colors.mystic}
          borderWidth={1}
          padding={10}
          minW={{ base: '30%', sm: '30%' }}
        >
          <Button
            variant='outline'
            colorScheme='white'
            borderColor={colors.mystic}
            marginRight={5}
            paddingRight={12}
            textColor={colors.fiord}
          >
            Open
          </Button>
          <ChevronRightIcon color={colors.gullGray} boxSize={8} />
        </Box>
      </Stack>
    </Card>
  );
};

export default Cards;
