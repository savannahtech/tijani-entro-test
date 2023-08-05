import React, { useContext } from 'react';
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
import { TaskProps } from '../models/interface';
import { GlobalContext } from '../context/global';

type ConnectCardProps = {
  item: TaskProps;
};

const ConnectCard = ({ item }: ConnectCardProps) => {
  const { saveConnectedTask, connectedTask } = useContext<any>(GlobalContext);

  return (
    <Card
      direction={{ base: 'row', sm: 'row' }}
      overflow='hidden'
      variant='elevated'
      paddingX={10}
      maxW={{ base: '100%' }}
      size='sm'
      alignItems='center'
      justifyContent='center'
      py={2}
    >
      <Image
        objectFit='contain'
        // maxW={{ base: '100px', sm: '60px' }}
        maxH={{ base: '100px', sm: '45px' }}
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
          <Heading size='sm' fontSize={14} fontWeight='600'>
            {item?.title || ''}
          </Heading>

          <Text color={colors.gullGray}>{item?.description || ''}</Text>
        </CardBody>
        <Box>
          <Button
            variant='outline'
            colorScheme='white'
            borderColor={colors.mystic}
            textColor={colors.fiord}
            onClick={() => saveConnectedTask(item?.id)}
            disabled={connectedTask.find((z: number) => z === item.id)}
          >
            {connectedTask.find((z: number) => z === item.id)
              ? 'pending'
              : 'Link +'}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default ConnectCard;
