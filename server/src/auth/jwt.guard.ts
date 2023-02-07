import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { verify } from 'jsonwebtoken';

@Injectable()
export class JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();

    const authorizationHeader = ctx.req.headers.authorization;

    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];

      try {
        const user = verify(token, process.env.JWT_SECRET);
        ctx.user = user;
        return true;
      } catch (error) {
        throw new HttpException(
          'Invalid Token: ' + error.message,
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }
}
