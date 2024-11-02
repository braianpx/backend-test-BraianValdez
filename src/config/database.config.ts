import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { Task } from 'src/task/task.entity';
import { createDatabase } from 'typeorm-extension';

export const connectDB = () => {
 return TypeOrmModule.forRootAsync({
  imports: [ConfigModule],    // configuracion para que pueda leer las variables de entorno
  inject: [ConfigService],    //
  useFactory: async (configService: ConfigService) => {  //conexion DB con variables de entorno
    try{
      await createDatabase({ //crea la DB si no existe
        ifNotExist: true,
        options: {
          type: 'postgres',
          host: configService.get<string>('HOST') || 'localhost',
          port: configService.get<number>('PORTDB') || 5432,
          username: 'postgres',
          password: configService.get<string>('PASSWORD') || 'postgres',
          database: configService.get<string>('DB') || 'TechTestDB',
        },
      });
      return {  //retorna la conexion para la DB anteriormente creada
        type:'postgres',
        host: configService.get<string>('HOST') || 'localhost',
        port: configService.get<number>('PORTDB') || 5432,
        username: configService.get<string>('USER') || 'postgres',
        password: configService.get<string>('PASSWORD') || 'postgres',
        database: configService.get<string>('DB') || 'TechTestDB',
        entities: [Task],
        synchronize: true,
        autoLoadEntities: true,
        }
      }catch(err){
      console.log('failed connection DB', err)
      }
    }
  })
}