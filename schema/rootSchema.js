import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import Mongo from "../models/Mongo.js";
import { mongoType } from "./schemaType.js";

const RootQuery = new GraphQLObjectType({
  name: "mongo",
  fields: () => ({
    allData: {
      type: new GraphQLList(mongoType),
      resolve: () => {
        Mongo.staticExample();
        return Mongo.find();
      },
    },
  }),
});

const RootMutation = new GraphQLObjectType({
  name: "mutation",
  fields: () => ({
    create: {
      type: mongoType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        const mongo = new Mongo(args);
        return mongo.save();
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
