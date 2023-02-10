import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly client;
    constructor(client: ClientProxy);
    getHello(): string;
    getItemById(id: number): import("rxjs").Observable<any>;
}
