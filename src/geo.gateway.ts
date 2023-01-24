import { Logger } from '@nestjs/common';

import {
  OnGatewayConnection,
  WebSocketGateway,
} from '@nestjs/websockets';
import * as dotenv from 'dotenv';
import { Socket } from 'socket.io';

dotenv.config();
const WS_PORT = +process.env.WS_PORT; // TODO make global config service

@WebSocketGateway(WS_PORT)
export class GeoGateway implements OnGatewayConnection {

  public async handleConnection(client: Socket) {
    const clientId = client.id;

    Logger.log({ message: `Client connected: ${clientId}` })
    const ip = client.handshake.headers['X-Forwarded-For'];

    if (!ip) {
      Logger.error({
        reason: `Header "X-Forwarded-For" is empty`,
        headers: client.handshake.headers,
      });
    } else {
      Logger.log({
        message: `Success! header "X-Forwarded-For" is no empty, IP: ${ip}`,
      });
    }
  }
}
