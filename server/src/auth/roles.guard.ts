import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

interface Roles {
  id: string;
  name: string;
  createAt: string;
  updatedAt: string;
  deletedAt?: string;
}

@Injectable()
export class RolesGuard implements CanActivate {
  public roles: string[];

  constructor(roles: string[]) {
    this.roles = roles;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();

    const { roles } = ctx.user as {
      roles: Roles[];
    };

    if (this.roles.length > 0) {
      const hasRole = () =>
        this.roles.some((role) => roles.some((r) => r.name === role));

      if (!hasRole()) {
        throw new HttpException(
          'You do not have permission to access this resource',
          HttpStatus.FORBIDDEN,
        );
      }
      return true;
    }
  }
}
