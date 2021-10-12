import mongoose from "mongoose";

export interface ITodo extends mongoose.Document {
    name: string,
    description: string,
    user: {
        type: typeof mongoose.Schema.Types.ObjectId,
        ref: string,
    }
};

const TodoSchema: mongoose.Schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Todo = mongoose.model("Todo", TodoSchema);



