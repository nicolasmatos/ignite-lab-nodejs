import { Controller, Post, Options, Body } from '@nestjs/common';
import { Content } from 'src/application/entities/content';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from '../../database/prisma/prisma.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';
const OptionsList = {
  GET: {
    '/notifications': ' Pega todo as as notificações existentes na tabela',
  },
  POST: {
    '/notifications': ' Cria notificações',
  },
  OPTIONS: {
    '/notifications':
      'Oi bb, vem sempre aqui? Brincadeira. É o que você acabou de usar pra acessar isso',
  },
};

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });
    return { notification };
  }
  @Options()
  optionsComands() {
    return OptionsList;
  }
}
