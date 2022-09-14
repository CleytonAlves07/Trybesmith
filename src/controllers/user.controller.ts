import { Request, Response } from 'express';
import UserService, { schema } from '../services/user.service';
import jwtService from '../services/jwt.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const { error } = schema.validate(user);
    
    if (error) {
      if ((error.message).includes('required')) {
        return res.status(400).json({ message: error.message });
      }
      
      return res.status(422).json({ message: error.message });
    }
    const userCreated = await this.userService.create(user);
       
    const token = jwtService.createToken(userCreated);

    return res.status(201).json({ token });
  };
}

export default UserController;