import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "hello",
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => {
        return "Hello world";
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
