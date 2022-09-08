import {User} from '../../interface'
import {UserOuput} from '../../../database/models/User'

export const toUser= (user: UserOuput): User => {
    return {
        ID: user.ID, 
        CI: user.CI, 
        username: user.username, 
        password: user.password, 
        email: user.email, 
        rol: user.rol, 
        image: user.image, 
       
    }
}