import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeoGateway } from './geo.gateway';


@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [GeoGateway],
})
export class GeoModule {}
