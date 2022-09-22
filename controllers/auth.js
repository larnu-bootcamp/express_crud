
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    res.status(201).json({
      "message": "User Created",
      "userid": user.id
    });
  } catch (err) {
    console.log(err);
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`
      });
    }

    //comparing passwords
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
  
    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
      return res.status(401)
        .send({
          message: "Invalid Password" // normally we would not send this message to the user
        });
    }

    //signing token with user id
    const token = jwt.sign({
      id: user.id,
      name: user.name,
    }, 'secret-key', {
      expiresIn: 86400
    });
    // secret-key and expiresIn should be in .env file

    //responding to client request with user profile success message and  access token .
    res.status(200)
      .send({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        message: "Login successfull",
        accessToken: token,
      });
  } catch (err) {
    console.log(err);
  }
}
