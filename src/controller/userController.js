import bcrypt from 'bcrypt';
import Signup from '../models/signUpModel.js';
import User from '../models/userModels.js';
import generateToken from "../utils/tokenGenerator.js";

export const registerUser = async (req, res) => {

    try {
        const { firstName, lastName, email, password, phone, avatar, role, verified, otp, source } = req.body;

        // Check if the user already exists
        let existingSignup = await Signup.findOne({ email });
        if (existingSignup) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the Signup document
        const signupDetails = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            avatar,
            role,
            verified,
            otp,
            source,
        };

        const signupDocument = new Signup(signupDetails);
        const savedSignup = await signupDocument.save();

        // Create the User document with a reference to the Signup document
        const userDocument = new User({
            signup: savedSignup._id,
        });
        const savedUser = await userDocument.save();


        // Generate JWT token
        const token = generateToken({ _id: savedUser._id ,email:savedSignup.email, role:savedSignup.role});

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        console.error('Error registering user:', error);
        // const errorMessage = error;
        res.status(500).json({ message: `${error}`, });
    }
};
