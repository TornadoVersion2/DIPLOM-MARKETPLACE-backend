import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImgController } from './img.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'src', 'img', 'uploads'),
      serveRoot: '/uploads',
    }),
    MulterModule.register({
      dest: join(process.cwd(), 'src', 'img', 'uploads'),
    }),
  ],
  controllers: [ImgController],
})
export class ImgModule {} 