import { User, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

export class UserMediator {
    repo: SurrealDBRepo

    constructor(repo: SurrealDBRepo) {
        this.repo = repo;
    }

    async get_user(id: String): Promise<WithId<User>> {
        const maybeUser = await this.repo.get_user(id.toString());
        if (maybeUser == null) {
            throw new Error("user not found");
        }

        return maybeUser as WithId<User>;
    }

    async create_user(name: String): Promise<WithId<User>> {
        const user: User = {
            name: name
        }
        return await this.repo.create_user(user);
    }
}
