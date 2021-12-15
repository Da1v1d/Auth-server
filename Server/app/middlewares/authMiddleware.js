import jwt from 'jsonwebtoken'


export const verifyieUser =(req, res , next) => {
    try {
        const {accesToken} = req.cookies;
        console.log(accesToken)
        if (!accesToken){
            return res.status(401).json({message:'Acces Denied'})
        } 
        const verifyied= jwt.verify(accesToken , 'secret-token')
        res.user=verifyied;
        console.log(verifyied)
        next();
    } catch (error) {
        console.log(error)
    }
         
}