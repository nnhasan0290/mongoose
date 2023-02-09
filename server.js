import express from "express";
import dotEnv from "dotenv";
import { connectDatabase } from "./config/database.js";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/rootSchema.js";

const app = express();
dotEnv.config({ path: "./config/.env" });
connectDatabase();

app.use(
  "/graph",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`app is running at ${process.env.PORT}`);
});
