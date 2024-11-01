import { SurrealDBRepo } from "./repo";

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { mergeResolvers } from "@graphql-tools/merge";

import { user_resolvers } from "./resolvers/user";
import { game_resolvers } from "./resolvers/game";
import { discard_resolvers } from "./resolvers/discard";
import { player_resolvers } from "./resolvers/player";

import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { UserController } from "./grpc/user";
import { ProtoGrpcType } from "./proto/shithead";
import { GameController } from "./grpc/game";
import { DiscardController } from "./grpc/discard";
import { PlayerController } from "./grpc/player";
const PROTO_FILE = '../proto/shithead.proto';
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType

async function startGraphQL(): Promise<void> {
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
    
    return new Promise<void>((resolve) => {
        app.listen(PORT, () => {
            console.log(`GraphQL Server listening on http://localhost:${PORT}${server.graphqlPath}`);
            resolve();
        });
    });
}

async function startGRPC(): Promise<void> {
    const server = new grpc.Server();

    const repo = new SurrealDBRepo();
    await repo.init();

    const userController = new UserController(repo);
    const gameController = new GameController(repo);
    const discardController = new DiscardController(repo);
    const playerController = new PlayerController(repo);

    server.addService(grpcObj.shithead.User.service, userController);
    server.addService(grpcObj.shithead.Game.service, gameController);
    server.addService(grpcObj.shithead.Discard.service, discardController);
    server.addService(grpcObj.shithead.Player.service, playerController);

    return new Promise<void>((resolve, reject) => {
        server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            console.log(`gRPC Server started on port ${port}`);
            server.start();
            resolve();
        });
    });
}

async function startServers() {
    await Promise.all([startGraphQL(), startGRPC()]);
}

startServers().catch((error) => {
    console.error("Error starting servers:", error);
});
