import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const uri =process.env.MONGO_URI;

mongoose.connect(uri);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model("users", userSchema);

export default User;
