import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, 'secret');

        req.id = decoded?.id;
    } catch (error) {
        console.log(error);
    }

    next();

    return req;
}