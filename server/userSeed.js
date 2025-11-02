import User from './models/User.js';
//import bcrypt from 'bcryptjs';
import connectDB from './db/db.js';

const userRegister = async () => {
    connectDB();
    try{
       // const Hashpassword = await bcrypt.hash("admin123", 10);
        const newuser = new User({
            name: "John Doe",
            email: "admin@gmail.com",
            password: "admin123",
            role: "admin",
        });
        await newuser.save();
        console.log("User registered successfully");
    } catch (error) {
        console.error("Error seeding users:", error);
    }
} 

userRegister();