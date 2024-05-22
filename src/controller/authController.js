import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../../models/userModels.js";
import generateToken from "../../utils/tokenGenerator.js";
import Signup from "../../models/signupModel.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists in the Signup collection
        const existingUser = await Signup.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Fetch the User document using the signup field
        const user = await User.findOne({ signup: existingUser._id });
        if (!user) {
            return res.status(500).json({ message: 'User data inconsistency' });
        }

        // Generate JWT token
        const token = generateToken({
            _id: user._id,
            email: existingUser.email,
            role: existingUser.role,
        });


        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: existingUser._id,
                email: existingUser.email,
                role: existingUser.role,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
