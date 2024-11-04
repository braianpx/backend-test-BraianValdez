import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const swagger = (app) =>{
const config = new DocumentBuilder()
.setTitle('Tech Test')
.setDescription('Tech Test API')
.setVersion('1.0')
.addTag('TechTest')
.build();

const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, documentFactory);
}