import "reflect-metadata";
import {MikroORM} from "@mikro-orm/core";
import mikroConfig from './mikro-orm.config';
import express from 'express';
import {ApolloServer} from "apollo-server-express";
import {buildSchema} from "type-graphql";
import {UserResolver} from "./resolvers/UserResolver";
import {ContactResolver} from "./resolvers/ContactResolver";

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ UserResolver , ContactResolver],
            validateL: false,
        }),
        context: () => ({ em: orm.em }),
    })

    apolloServer.applyMiddleware({ app });
    app.listen(4000, ()=> {
        console.log('server starts on 4000');
    });


}

main().catch((err) => {
    console.error(err);
});
