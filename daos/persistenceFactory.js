import config from '../config.js'

export default class PersistenceFactory {
    static getPersistence = async () => {
        switch (config.app.persistence) {
            case "ARRAY":
                let { default: UsersDaoArray } = await import('./userDaoArray.js')
                // let UsersDaoArray = await import('./userDaoArray.js')
                return new UsersDaoArray()
            case "FILE":
                let { default: UserDaoFile } = await import('./userDaoFile.js')
                return new UserDaoFile()
            case "MONGO":
                let { default: UserDaoMongo } = await import('./userDaoMongo.js')
                return new UserDaoMongo()
        }
    }
}