import { NestFactory } from '@nestjs/core';
import { GeoModule } from './geo.module';

async function bootstrap() {
  const app = await NestFactory.create(GeoModule);
  await app.listen(4000).then(() => console.log('Geo service is listening...'));
}

bootstrap();
