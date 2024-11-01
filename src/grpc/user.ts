import { SurrealDBRepo } from '../repo';
import { UserMediator } from '../mediators/user';
import { UserHandlers } from '../proto/shithead/User';
import { GetUserRequest } from '../proto/shithead/GetUserRequest';
import { GetUserResponse } from '../proto/shithead/GetUserResponse';
import { CreateUserRequest } from '../proto/shithead/CreateUserRequest';
import { sendUnaryData, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js';
import { CreateUserResponse } from '../proto/shithead/CreateUserResponse';

export class UserController implements UserHandlers {
    private repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }
    [name: string]: UntypedHandleCall;

    async GetUser(call: ServerUnaryCall<GetUserRequest, GetUserResponse>, callback: sendUnaryData<GetUserResponse>) {
        console.log(`Got a get user request: ${call.request}`);

        let res = await new UserMediator(this.repo).get_user(call.request.id!);
        const response: GetUserResponse = {
            id: res.id.id.toString(),
            name: res.name.toString(),
        }
        callback(null, response);
    }
    
    async CreateUser(call: ServerUnaryCall<CreateUserRequest, CreateUserResponse>, callback: sendUnaryData<CreateUserResponse>) {
        console.log(`Got a create user request: ${call.request}`);

        let res = await new UserMediator(this.repo).create_user(call.request.name!);
        const response: CreateUserResponse = {
            id: res.id.id.toString(),
        }
        callback(null, response);
    }
}
