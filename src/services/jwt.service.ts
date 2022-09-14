import Jwt from 'jsonwebtoken';
import User from '../interfaces/user.interfaces';

const secret = 'xablau';

const jwtService = {
  createToken: (user: User) => {
    const token = Jwt.sign({ data: user }, secret, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });
    return token;
  },
  // validateToken: (token: string) => {
  //   const decode = Jwt.verify(token);
  //   return decode;
  // },
};

export default jwtService;