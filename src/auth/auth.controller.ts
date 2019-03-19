import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

/**
*
* /auth 
*
**/
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** 
  * GET /auth/token 
  **/
  @Get('token')
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  /** 
  * GET /auth/data 
  **/
  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    // this route is restricted by AuthGuard
    // JWT strategy
    return 'welcome';
  }
}
