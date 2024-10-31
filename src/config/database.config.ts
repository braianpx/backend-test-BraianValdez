import { TypeOrmModule } from '@nestjs/typeorm';
const { USER, PASSWORD, DB, HOST, PORT } = process.env;
const port = parseInt(PORT);

export const connectDB = () => {
 return TypeOrmModule.forRoot({
  type:'postgres',
  host: HOST || 'localhost',
  port: port || 5432,
  username: USER || 'postgres',
  password: PASSWORD || '',
  database: DB || 'TecTestDB',
  entities: [],
  synchronize: true,
  })
}