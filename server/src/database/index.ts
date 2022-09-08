import User  from './models/User'

const dbInit = () => {
    User.sync({ alter: true })
}
export = dbInit 