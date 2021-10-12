import express from "express";
import { ITodo, Todo } from "../models/Todo";

export const CreateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const todo: ITodo = new Todo({
            name: req.body.name,
            description: req.body.description
        });
        await todo.save()
        .then((todo) => res.status(200).json(todo));
    } catch (error: any) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const FetchAllTodos: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.find()
        .then((todos) => res.status(200).json(todos))
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const GetOneTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.findById(req.params.id)
        .then((todo) => res.status(200).json(todo));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const UpdateTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await Todo.findByIdAndUpdate(id, {
            name, description
        })
        .then(() => res.status(200).json("Todo Updated!"));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};

export const DeleteTodo: express.RequestHandler =
async (req, res, next) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json("Todo was Deleted!"));
    } catch (error) {
        res.status(500).json(error);
        next(error);
    }
};






