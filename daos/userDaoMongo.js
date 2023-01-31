import User from './userModel.js';


export default class UserDaoMongo {
    constructor() {   
      this.users = [];     
    }


    getAll = async() => {
      this.users = await User.find();
      return this.users;
    }

    save = async(user) => {      
        let response = await User.create(user);
        this.users.push(response)
        return response;
    }
}