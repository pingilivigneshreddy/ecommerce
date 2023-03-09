import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      expiresIn: '365d',
      secretOrKey: '5455454554445',
    });
  }

  async validate(payload: any) {
    return { username: payload.username, id: payload.id };
  }
}
