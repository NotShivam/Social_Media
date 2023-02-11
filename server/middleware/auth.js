import jwt from 'jwtwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
    } catch (error) {
        console.log(error);
    }
}