import React from 'react';
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Cards from '../../components/Cards';
import colors from '../../assets/styles/colors';
import CreateTaskModal from '../../components/Modal/CreateTask';

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxWidth='80ch'>
      <Flex
        flexDirection='row'
        alignItems='center'
        marginTop={20}
        marginBottom={5}
      >
        <Text color={colors.fiord} fontWeight='600' marginRight={5}>
          Tasks
        </Text>
        <Button
          variant='outline'
          colorScheme='gray'
          backgroundColor={colors.white}
          borderColor={colors.mystic}
          paddingRight={6}
          textColor={colors.gullGray}
          onClick={onOpen}
        >
          New task
        </Button>
      </Flex>
      <Stack spacing='4'>
        <Cards />
        <Cards />
        <Cards />
      </Stack>

      {isOpen && (
        <CreateTaskModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          handleSubmit={() => onClose()}
        />
      )}
    </Container>
  );
}
