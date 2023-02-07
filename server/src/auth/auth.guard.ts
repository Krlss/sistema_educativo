import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';
import { compare } from 'src/common/helpers/bcrypt.helpers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const { email, password } = ctx.req.body.variables;

    const user = await this.userService.getByEmail(email);

    if (user) {
      const isMatch = await compare(password, user.password);
      if (!isMatch) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }
      ctx.user = user;
      return true;
    }
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
