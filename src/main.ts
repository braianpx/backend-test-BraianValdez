import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swagger } from './config/swagger.config';

async function bootstrap() {
  try{
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ //habilita las validaciones de datos de forma global
    whitelist: true,  // borra las propiedades que no estan definidas en el DTO
    forbidNonWhitelisted: true,  // lanza un error si recibe una propiedad no definida en el DTO
  }));
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  swagger(app) // config swagger
  await app.listen(3000);
  console.log('server listen in', 3000)
  }catch(err){
    console.log(err)
  }
}
bootstrap();
