import { Request, Response } from 'express';
import UserService from '../services/user.service';
import jwtService from '../services/jwt.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
        
    const token = jwtService.createToken(userCreated);

    return res.status(201).json({ token });
  };
}

export default UserController;