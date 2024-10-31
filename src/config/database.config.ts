import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

export const connectDB = () => {
 return TypeOrmModule.forRootAsync({
  imports: [ConfigModule],    // configuracion para que pueda leer las variables de entorno
  inject: [ConfigService],    //
  useFactory: (configService: ConfigService) => ({  //conexion DB con variables de entorno
    type:'postgres',
    host: configService.get<string>('HOST') || 'localhost',
    port: configService.get<number>('PORTDB') || 5432,
    username: configService.get<string>('USER') || 'postgres',
    password: configService.get<string>('PASSWORD') || 'postgres',
    database: configService.get<string>('DB') || 'TechTestDB',
    entities: [],
    synchronize: true,
    })
  })
}