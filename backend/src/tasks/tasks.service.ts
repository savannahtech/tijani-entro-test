import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const { title, description, userId, assigneeName } = createTaskDto;

    const newTask = await this.prisma.task.create({
      data: { title, description, userId, assigneeName, status: 'pending' },
    });

    return newTask;
  }

  findAll() {
    return this.prisma.task.findMany({ include: { connected: true } });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({ data: updateTaskDto, where: { id } });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
