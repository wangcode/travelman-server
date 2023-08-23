import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @ApiProperty({ example: 'example@website.com' })
  email: string;

  @ApiProperty({ example: '46dvfsvas0d8asdf' })
  password: string;
}

export class SignupDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class ChangePasswordDto {
  @ApiProperty()
  oldPassword: string;

  @ApiProperty()
  newPassword: string;
}

export class ResetPasswordDto {
  @ApiProperty()
  email: string;
}

export class JWTPayload {
  username: string;
  sub: string;
}
