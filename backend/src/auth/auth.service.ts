import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password, name } = createUserDto;

    // hash the password
    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    // console.log('.....', newUser);

    delete newUser.password;

    // generate token
    const token = await this.generateToken(newUser);

    return { user: newUser, token };
  }

  public async login(loginDto: LoginAuthDto) {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(password, user.password);

    if (!match) {
      return null;
    }

    const token = await this.generateToken({ id: user.id, email: user.email });

    // @ts-ignore
    delete user.password;
    return { user, token };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
