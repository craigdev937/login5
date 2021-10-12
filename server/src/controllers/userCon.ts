import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/keys";
import { IUser, User } from "../models/User";

export const Register: express.RequestHandler =
async (req, res, next) => {
    try {
        const salt: string = await bcrypt.genSalt(12);
        const hashedPass: string = 
            await bcrypt.hash(req.body.password, salt);
        const user: IUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });
        await user.save()
        .then((user) => res.status(201).json(user));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const Login: express.RequestHandler =
async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(404).send({
            message: "That user is not found!"
        });        
        if (!await bcrypt.compare(req.body.password, user.password)) {
            return res.status(400).send({
                message: "Invalid credentials"
            })
        };
        const token = jwt.sign({_id: user._id}, config.JWT_SECRET);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1-day
        });
        res.send({ message: "Success!" });
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const FetchAllUsers: express.RequestHandler =
async (req, res, next) => {
    try {
        await User.find()
            .then((users) => res.json(users));
    } catch (error) {
        res.status(400).json(error);
        next(error);
    }
};

export const Logout: express.RequestHandler =
(req, res, next) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.send({ message: "User logged out!" });
    } catch (error) {
        res.status(400).json(error);
        next(error);
    }
};





