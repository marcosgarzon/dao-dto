// import UsersDaoArray from "../daos/userDaoArray.js";
// import UserDaoFile from "../daos/userDaoFile.js";
import PersistenceFactory from "../daos/persistenceFactory.js"

export default class UsersService {
    constructor() {
        // this.usersDao = new UsersDaoArray()
        // this.usersDao = new UserDaoFile()
        this.usersDao
        this.init()
    }

    init = async() => {
        this.usersDao = await PersistenceFactory.getPersistence()
    }

    getUsers = async () => {
        return await this.usersDao.getAll()
    }

    addUser = async(user) => {
        return await this.usersDao.save(user)
    }
}