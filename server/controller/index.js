import bcrypjs from 'bcryptjs';
import UserModel from '../models/index.js';

export const signup = async (req, res) => {
    try {
        //req.body
        const { username, email, password, confirm_password } = req.body;

        //check to see if the user's data already in the database
        const user = await UserModel.findOne({ email });

        if (user) return res.status(400).json({ msg: `Email already exist in the database ${email}` });

        if (password !== confirm_password) return res.status(400).json({ msg: `The two password does not match!` });

        const hash_password = bcrypjs.hashSync(password, 10);

        const users = await UserModel.create({ username, email, password: hash_password });

        console.log(users);

        res.status(200).json({ data: users });
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (req, res) => {
    try {
        //grab the client's data
        //req.body
        const { email, password } = req.body;

        //check to see if the user's data already in the database
        const user = await UserModel.findOne({ email });

        if (!user) return res.status(400).json({ mesg: `The user's email is not in our database ${email}` });

        //check to see if the entered password matches the password from the db
        const hash = user.password; //the password from the database

        const password_true = bcrypjs.compareSync(password, hash);

        if (!password_true) return res.status(400).json({ msg: `Password incorrect!` });

        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
    }
}