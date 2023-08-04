import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Divider,
  Box,
  Text,
  Stack,
  Image,
  Input,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import colors from '../../assets/styles/colors';
import plusIcon from '../../assets/images/plusIcon.png';
import CustomMenu from '../CustomMenu';
import { AddIcon } from '@chakra-ui/icons';
import Cards from '../Cards';
import ConnectCard from '../ConnectCard';

type CreateTaskModalProps = {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
  handleSubmit: () => void;
};

const CreateTaskModal = ({
  isOpen,
  onOpen,
  onClose,
  handleSubmit,
}: CreateTaskModalProps) => {
  const [step, setStep] = useState(1);
  const [showRelated, setShowRelated] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      setStep(1);
    }
  };

  return (
    <Modal onClose={onClose} size='xl' isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent paddingTop={5} backgroundColor={colors.whiteLilac}>
        <ModalBody>
          <Stack direction={{ base: 'row', sm: 'row' }}>
            <Image
              objectFit='contain'
              maxW={{ base: '100%', sm: '60px' }}
              maxH={{ base: '100px', sm: '60px' }}
              src={plusIcon}
              alt='Caffe Latte'
              marginRight={5}
            />

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              w='100%'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Input
                  variant='unstyled'
                  placeholder='Task Title'
                  size='sm'
                  _placeholder={{ color: colors.ebony, fontWeight: '600' }}
                  disabled={step === 1 ? false : true}
                />

                <Text color={colors.gullGray} fontSize={12}>
                  Sep 10, 2022 4:30 PM
                </Text>
              </Box>

              <Flex alignItems='center'>
                <Text color={colors.gullGray} fontSize={12} marginRight={3}>
                  Assign to
                </Text>
                <CustomMenu />
              </Flex>
            </Stack>
          </Stack>
          <Divider mt={5} />

          {step === 2 && (
            <Box paddingX={3}>
              <Text
                color={colors.gullGray}
                fontSize={12}
                marginTop={10}
                marginBottom={2}
                fontWeight='500'
              >
                Description
              </Text>
              <Textarea
                placeholder='Here is a sample placeholder'
                size='sm'
                resize='none'
                borderRadius={5}
                backgroundColor={colors.catskillWhite}
              />

              <Box paddingX={3}>
                <Text
                  color={colors.mirage}
                  fontSize={14}
                  marginTop={10}
                  marginBottom={2}
                  fontWeight='600'
                >
                  Related tasks
                </Text>
                <Box maxW='90px'>
                  <Divider mt={4} borderColor={colors.mirage} borderWidth={1} />
                </Box>
              </Box>
              {!showRelated ? (
                <Flex
                  alignItems='center'
                  marginY={5}
                  onClick={() => setShowRelated(true)}
                >
                  <AddIcon />
                  <Text
                    color={colors.fiord}
                    fontSize={16}
                    fontWeight='500'
                    marginLeft={2}
                  >
                    Link to other tasks
                  </Text>
                </Flex>
              ) : (
                <Stack spacing='4' marginY={5}>
                  <ConnectCard />
                  <ConnectCard />
                  <ConnectCard />
                  <ConnectCard />
                </Stack>
              )}
            </Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleNext}
            mr={3}
            variant='solid'
            colorScheme='messenger'
            backgroundColor={colors.denim}
            paddingX={8}
            textColor={colors.white}
            size='sm'
            fontSize='12px'
          >
            {step === 1 ? 'Next' : 'Back'}
          </Button>
          <Button
            onClick={handleSubmit}
            variant='outline'
            colorScheme='whiteAlpha'
            backgroundColor={colors.catskillWhite}
            borderColor={colors.mystic}
            paddingX={8}
            textColor={colors.fiord}
            size='sm'
            fontSize='12px'
          >
            Finish
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTaskModal;
