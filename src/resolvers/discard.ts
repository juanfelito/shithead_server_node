import { UserMediator } from "../mediators/user";
import { In } from "../models";
import { SurrealDBRepo } from "../repo";

type GetUserArg = {
    id: String
}

type CreateUserRequestInput = {
    name: String
}

export function user_resolvers(repo: SurrealDBRepo) {
    const resolvers = {
        Query: {
            async getUser(_: null, args: GetUserArg){
                return new UserMediator(repo).get_user(args.id);
            }
        },
        Mutation: {
            async createUser(_: null, input: In<CreateUserRequestInput>): Promise<String> {
                return (await new UserMediator(repo).create_user(input.in.name)).id.toString();
            },
        }
    }

    return resolvers
}
