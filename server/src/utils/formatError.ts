import { GraphQLError } from "graphql";

export const formatError = (error: GraphQLError) => {
  if (error.message === "Argument Validation Error") {
    const errors = error.extensions?.exception?.validationErrors.map(
      (error: { property: string; constraints: { [key: string]: string } }) => {
        return {
          field: error.property,
          message: Object.values(error.constraints),
        };
      }
    );

    return {
      message: error.message,
      code: error.extensions?.code,
      errors: errors,
    };
  }
  return error;
};
