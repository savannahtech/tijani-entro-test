import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Divider,
  Box,
  Text,
  Stack,
  Image,
  Flex,
  Wrap,
  WrapItem,
  Badge,
} from '@chakra-ui/react';
import moment from 'moment';
import colors from '../../assets/styles/colors';
import plusIcon from '../../assets/images/plusIcon.png';
import { AddIcon } from '@chakra-ui/icons';
import Cards from '../Cards';

type ViewTaskModalProps = {
  isOpen: boolean;
  onOpen: any;
  onClose: any;
  task: any;
};

const ViewTaskModal = ({ isOpen, onClose, task }: ViewTaskModalProps) => {
  const [showRelated, setShowRelated] = useState(true);

  return (
    <Modal onClose={onClose} size='3xl' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        paddingTop={5}
        backgroundColor={colors.whiteLilac}
        // maxW={{ main: '100px', sm: '600px' }}
      >
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
                <Text color={colors.ebony} fontSize={12} fontWeight='600'>
                  {task?.title || 'Task Title'}
                </Text>

                <Text color={colors.gullGray} fontSize={12}>
                  {moment(task?.createdAt).format('MMM DD, YYYY h:m A')}
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Divider mt={5} />

          <Wrap mt={5}>
            <WrapItem>
              <Box w='120px' h='80px'>
                <Text color={colors.gullGray} fontSize={12}>
                  Status
                </Text>
                <Badge
                  ml='1'
                  fontSize='0.7em'
                  padding={2}
                  color={colors.fiord}
                  borderRadius='full'
                  backgroundColor={colors.catskillWhite}
                >
                  {task?.status}
                </Badge>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box w='180px' h='80px'>
                <Text color={colors.gullGray} fontSize={12}>
                  Date Created
                </Text>
                <Badge
                  ml='1'
                  fontSize='0.7em'
                  padding={2}
                  color={colors.fiord}
                  borderRadius='full'
                  backgroundColor={colors.catskillWhite}
                >
                  {moment(task?.createdAt).format('MMM DD, YYYY h:m A')}
                </Badge>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box w='120px' h='80px'>
                <Text color={colors.gullGray} fontSize={12}>
                  Assignee
                </Text>
                <Badge
                  ml='1'
                  fontSize='0.7em'
                  padding={2}
                  color={colors.fiord}
                  borderRadius='full'
                  backgroundColor={colors.catskillWhite}
                >
                  {task?.assigneeName || 'Unassigned'}
                </Badge>
              </Box>
            </WrapItem>
          </Wrap>

          <Box>
            <Text color={colors.gullGray} fontSize={12}>
              Description
            </Text>
            <Box backgroundColor={colors.catskillWhite} h={100} padding={4}>
              <Text color={colors.fiord} fontSize={12}>
                {task?.description || ''}
              </Text>
            </Box>

            <Flex paddingX={3}>
              <Text
                color={showRelated ? colors.mirage : colors.paleSky}
                fontSize={14}
                marginTop={10}
                marginBottom={2}
                marginRight={3}
                fontWeight='600'
                borderBottomColor={showRelated ? colors.mirage : 'none'}
                borderX='none'
                borderTop='none'
                borderWidth={1}
              >
                Related tasks
              </Text>
              <Text
                color={!showRelated ? colors.mirage : colors.paleSky}
                fontSize={14}
                marginTop={10}
                marginBottom={2}
                fontWeight='600'
                borderBottomColor={!showRelated ? colors.mirage : 'none'}
                borderX='none'
                borderTop='none'
                borderWidth={1}
              >
                Watchers
              </Text>
            </Flex>

            <Stack spacing='4' marginY={5}>
              {task?.connecter?.length
                ? task.connecter.map((item: any) => (
                    <Cards
                      key={item.id}
                      title={item?.connected?.title}
                      status={item?.connected?.status}
                      date={item?.connected?.createdAt}
                      assignee={item?.connected?.assigneeName}
                      onClick={() => {
                        console.log('here');
                      }}
                    />
                  ))
                : ''}
            </Stack>
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
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ViewTaskModal;
