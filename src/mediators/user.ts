import { User, WithId } from "../models";
import { SurrealDBRepo } from "../repo";

export class UserMediator {
    db: SurrealDBRepo

    constructor(db: SurrealDBRepo) {
        this.db = db;
    }

    async get_user(id: String): Promise<WithId<User>> {
        const maybeUser = await this.db.get_user(id.toString());
        if (maybeUser == null) {
            throw new Error("user not found");
        }

        return maybeUser as WithId<User>;
    }

    async create_user(name: String): Promise<WithId<User>> {
        const user: User = {
            name: name
        }
        return await this.db.create_user(user);
    }
}