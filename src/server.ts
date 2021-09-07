import "reflect-metadata";
import { ApolloServer } from "apollo-server";

import "./database";
import "./database/schemas/Tweet";
import schemaFn from "./schemas";

const app = async () => {
  const schema = await schemaFn();

  const server = new ApolloServer({ schema });

  server
    .listen(4003)
    .then(({ url }) => console.log(`Server running on ${url}`));
};

app();
