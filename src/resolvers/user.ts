import { UserMediator } from "../mediators/user";
import { In } from "../models";
import { SurrealDBRepo } from "../repo";

type GetUserArg = {
    id: String
}

type CreateUserRequestInput = {
    name: String
}

const resolvers = {
    Query: {
        async getUser(_: null, args: GetUserArg){
            let repo = new SurrealDBRepo();
            await repo.init();
            
            return new UserMediator(repo).get_user(args.id);
        }
    },
    Mutation: {
        async createUser(_: null, input: In<CreateUserRequestInput>): Promise<String> {
            let repo = new SurrealDBRepo();
            await repo.init();
            
            return (await new UserMediator(repo).create_user(input.in.name)).id.toString();
        },
    }
};

export default resolvers;
