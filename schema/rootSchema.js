import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const basicType = new GraphQLObjectType({
  name: "basic",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "hello",
  fields: () => ({
    hello: {
      type: basicType,
      resolve: () => {
        return { name: "hello world" };
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
