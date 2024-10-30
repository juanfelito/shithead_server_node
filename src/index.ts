import { RecordId } from "surrealdb";
import { SurrealDBRepo } from "./repo";
import { User } from "./models";


async function main() {
    let repo = new SurrealDBRepo();
    await repo.init();

    let user: User = {
        name: "Juan"
    }
    let created_user = await repo.get_player_and_game("whi8nfe4b63mtqowub3t");
    console.log(created_user);
}

main();
