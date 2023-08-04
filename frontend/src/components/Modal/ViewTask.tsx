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
} from '@chakra-ui/react';
import colors from '../../assets/styles/colors';
import plusIcon from '../../assets/images/plusIcon.png';
import CustomMenu from '../CustomMenu';

type ViewTaskModalProps = {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
};

const ViewTaskModal = ({ isOpen, onOpen, onClose }: ViewTaskModalProps) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // complete
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
            <Box>
              <Text color={colors.gullGray} fontSize={12} marginY={10}>
                Description
              </Text>
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
            Next
          </Button>
          <Button
            onClick={onClose}
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

export default ViewTaskModal;
