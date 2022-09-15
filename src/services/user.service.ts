import User from '../interfaces/user.interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

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
