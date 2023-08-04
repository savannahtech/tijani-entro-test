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

const ConnectCard = () => {
  return (
    <Card
      direction={{ base: 'row', sm: 'row' }}
      overflow='hidden'
      variant='elevated'
      paddingX={10}
      maxW={{ base: '100%' }}
      size='sm'
      alignItems='center'
    >
      <Image
        objectFit='contain'
        maxW={{ base: '100%', sm: '60px' }}
        maxH={{ base: '100px', sm: '60px' }}
        src={cardLogo}
        alt='Caffe Latte'
      />

      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w='100%'
        alignItems='center'
        justifyContent='space-between'
      >
        <CardBody>
          <Heading size='sm'>Task Title</Heading>

          <Text py='2' color={colors.gullGray}>
            description
          </Text>
        </CardBody>
        <Box>
          <Button
            variant='outline'
            colorScheme='white'
            borderColor={colors.mystic}
            textColor={colors.fiord}
          >
            Link +
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default ConnectCard;