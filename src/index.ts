import { RecordId } from "surrealdb";
import { SurrealDBRepo } from "./repo";
import { User } from "./models";


async function main() {
    let repo = new SurrealDBRepo();
    await repo.init();

    let user: User = {
        name: "Felipe"
    }
    let created_user = await repo.get_game("ws892xqnpjueujptyaqw");
    console.log(created_user);
}

main();
