import Joi from 'joi';
import User from '../interfaces/user.interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export const schema = Joi.object({
  username: Joi
    .string()
    .min(3)
    .required(),
 
  classe: Joi
    .string()
    .min(3)
    .required(),
 
  level: Joi
    .number()
    .min(1)
    .required(),
 
  password: Joi
    .string()
    .min(8)
    .required(),
    
});
class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    const createUser = await this.model.create(user);
    return createUser;
  }
}

export default UserService;
