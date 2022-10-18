import bcrypt from "bcrypt";
const saltRounds = 10;

export const hashPassword = (password: string) => {
    if (!password){
        return '';
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}
