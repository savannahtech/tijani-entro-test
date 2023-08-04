import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import Cards from '../../components/Cards';
import colors from '../../assets/styles/colors';
import CreateTaskModal from '../../components/Modal/CreateTask';
import { httpGet, httpPost } from '../../services/http';
import { TaskProps } from '../../models/interface';
import ViewTaskModal from '../../components/Modal/ViewTask';

export default function Index() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openViewModal, setOpenViewModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetTasks = async () => {
    const res = await httpGet('tasks');
    console.log('res', res);
    setTasks(res);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  const handleCreateTask = async () => {
    setLoading(true);
    const res = await httpPost('tasks', {
      ...data,
      assigneeName: 'Femi',
      userId: 1,
    });
    if (res.status) {
      toast({
        title: 'Task created.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      // reload tasks list
      handleGetTasks();
      // close modal
      onClose();
    } else {
      // display error
      console.log('error', res);
      toast({
        title: 'Error',
        description: res.message ? res?.message.split(',')[0] : '',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    // stop loader
    setLoading(false);
  };

  const handleGetATask = async (id: number) => {
    const res = await httpGet(`tasks/${id}`);
    setSingleTask(res);
    setOpenViewModal(true);
  };

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
        {tasks.length
          ? tasks.map((item: TaskProps) => (
              <Cards
                key={item?.id}
                title={item?.title}
                status={item.status}
                date={item.createdAt}
                assignee={item.assigneeName}
                onClick={() => {
                  handleGetATask(item.id);
                }}
              />
            ))
          : ''}
      </Stack>

      {isOpen && (
        <CreateTaskModal
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          handleSubmit={handleCreateTask}
          loading={loading}
          data={data}
          setData={setData}
        />
      )}

      {openViewModal && (
        <ViewTaskModal
          isOpen={openViewModal}
          onOpen={() => setOpenViewModal(true)}
          onClose={() => setOpenViewModal(false)}
          task={singleTask}
        />
      )}
    </Container>
  );
}
