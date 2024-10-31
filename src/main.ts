import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try{
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('server listen in', process.env.PORT || 3000)
  }catch(err){
    console.log(err)
  }
}
bootstrap();
