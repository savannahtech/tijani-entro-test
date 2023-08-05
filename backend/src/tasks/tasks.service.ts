import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateConnectDto, CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const { title, description, userId, assigneeName, status, relatedTask } =
      createTaskDto;

    const newTask = await this.prisma.task.create({
      data: {
        title,
        description,
        userId,
        assigneeName,
        status: status || 'pending',
      },
    });

    if (relatedTask && relatedTask.length) {
      relatedTask.map(async (item) => {
        const isConnected = await this.prisma.connect.findFirst({
          where: { taskId: newTask.id, otherId: item },
        });

        if (!isConnected) {
          console.log('gets here');
          await this.prisma.connect.create({
            data: { taskId: newTask.id, otherId: item },
          });
        }
      });
    }

    return newTask;
  }

  async connectTask(connectDto: CreateConnectDto) {
    const { taskId, relatedTaskId } = connectDto;

    // find if connection exist
    const isConnected = await this.prisma.connect.findUnique({
      where: { id: taskId, otherId: relatedTaskId },
    });

    if (isConnected) {
      throw new UnauthorizedException('Task linked already');
    }

    const newConnect = await this.prisma.connect.create({
      data: { taskId, otherId: relatedTaskId },
    });

    return newConnect;
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: { connecter: { include: { connected: true } } },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({ data: updateTaskDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
