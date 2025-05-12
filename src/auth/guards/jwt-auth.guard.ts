import { Injectable, ExecutionContext, UnauthorizedException, CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Role } from '../../role.enum';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) {
    
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Токен не предоставлен');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET || 'your-secret-key'
      });

      if (!payload.sub || !payload.email || !payload.roles) {
        throw new UnauthorizedException('Неверный формат токена');
      }

      if (!Array.isArray(payload.roles) || 
          !payload.roles.every(role => Object.values(Role).includes(role))) {
        throw new UnauthorizedException('Неверные роли в токене');
      }
      const requiredRoles = this.getRequiredRoles(context);
      if (requiredRoles && !requiredRoles.some(role => payload.roles.includes(role))) {
        throw new UnauthorizedException('У вас нет доступа к этому ресурсу');
      }

      request['user'] = payload;

      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Неверный токен');
    }
  }
  private getRequiredRoles(context: ExecutionContext): Role[] | null {
    return this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
  }
} 