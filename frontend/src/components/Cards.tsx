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
import moment from 'moment';

type CardsProps = {
  title: string;
  status: string;
  date: string;
  assignee: string;
  onClick: () => void;
};

const Cards = ({ title, status, date, assignee, onClick }: CardsProps) => {
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
      onClick={onClick}
    >
      <Image
        objectFit='contain'
        // maxW={{ base: '100%', sm: '80px' }}
        maxH={{ base: '100px', sm: '5rem' }}
        src={cardLogo}
        alt='Caffe Latte'
      />

      <Stack
        direction={{ base: 'column', sm: 'row' }}
        w='100%'
        alignItems='center'
        justifyContent='center'
      >
        <CardBody>
          <Heading size='md' fontSize={14} fontWeight='600'>
            {title}
          </Heading>

          <Text py='2' color={colors.gullGray}>
            {assignee || ''} * Creation Date{' '}
            {moment(date).format('MMM DD, h:m')}
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
            {status}
          </Button>
          <ChevronRightIcon color={colors.gullGray} boxSize={8} />
        </Box>
      </Stack>
    </Card>
  );
};

export default Cards;
