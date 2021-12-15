import jwt from "jsonwebtoken"

export const createAccesToken = userId => {
    return jwt.sign( {id:userId}, 'secret-token', { expiresIn:'5m'} )
}

export const createRefreshToken = userId => {
    return sign( {userId}, 'secret-token', { expiresIn:'30d' } )
}