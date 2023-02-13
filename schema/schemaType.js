import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const mongoType = new GraphQLObjectType({
  name: "create",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});
