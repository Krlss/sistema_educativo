import userResolver from "./users/user.resolver";
import rolResolver from "./roles/rol.resolver";
import courseResolver from "./courses/course.resolver";

export const resolvers = [userResolver, rolResolver, courseResolver] as any;
