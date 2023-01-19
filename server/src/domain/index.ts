import userResolver from "./users/user.resolver";
import rolResolver from "./roles/rol.resolver";
import courseResolver from "./courses/course.resolver";
import AsignatureResolver from "./asignatures/asignature.resolver";
import UnitResolver from "./units/unit.resolver";
import TopicResolver from "./topics/topic.resolver";
import QuestionResolver from "./questions/question.resolver";

export const resolvers = [
  userResolver,
  rolResolver,
  courseResolver,
  AsignatureResolver,
  UnitResolver,
  TopicResolver,
  QuestionResolver,
] as any;
