import "reflect-metadata"
import {createConnection} from 'typeorm'
import { User } from "./entities/User"
import {ApolloServer} from 'apollo-server-express'
import express from 'express'
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello"

const main = async () => {
    const conn = createConnection({
        type: 'postgres',
        database: 'jobportal',
        username:'postgres',
        password:'toor',
        logging: true,
        synchronize: true,
        entities: [User]
    })

    
    
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        }),
        
    })
    await apolloServer.start()
    const app = express()

    app.get('/', (_, res) => {
        res.send("helo")
    })

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log('localhost:4000/graphql')
    })
}

main().catch(err => {
    console.log(err)
})