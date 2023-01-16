import userResolver from "./users/user.resolver";
import rolResolver from "./roles/rol.resolver";
import courseResolver from "./courses/course.resolver";
import AsignatureResolver from "./asignatures/asignature.resolver";

export const resolvers = [
  userResolver,
  rolResolver,
  courseResolver,
  AsignatureResolver,
] as any;
