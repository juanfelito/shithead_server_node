import { SurrealDBRepo } from "./repo";
import { User } from "./models";

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { mergeResolvers } from "@graphql-tools/merge";

import { user_resolvers } from "./resolvers/user";
import { game_resolvers } from "./resolvers/game";
import { discard_resolvers } from "./resolvers/discard";
import { player_resolvers } from "./resolvers/player";

async function start() {
    const typeDefs = gql`
        ${require('fs').readFileSync(require.resolve('./schema.graphql'), 'utf8')}
    `;

    const repo = new SurrealDBRepo();
    await repo.init();

    const user = user_resolvers(repo);
    const game = game_resolvers(repo);
    const discard = discard_resolvers(repo);
    const player = player_resolvers(repo);

    const resolvers = mergeResolvers([user, game, discard, player]);
  
    const server = new ApolloServer({ typeDefs, resolvers });
    
    const app = express();
    await server.start();
    server.applyMiddleware({ app });
    
    const PORT = process.env.PORT ?? 3000;
    
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}${server.graphqlPath}`);
    });
}

start();

async function main() {
    let repo = new SurrealDBRepo();
    await repo.init();

    let user: User = {
        name: "Juan"
    }
    let created_user = await repo.get_player_and_game("whi8nfe4b63mtqowub3t");
    console.log(created_user);
}

// main();
