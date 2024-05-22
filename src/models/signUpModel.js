import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
        default:"",
    },
    role: {
        type: String,
        default: 'User',
    },
    verified: {
        type: Boolean,
        default: false,
    },
    otp: {
        type: String,
        default: null,
    },
    source: {
        type: String,
        default: 'user',
    },
}, {
    timestamps: true,
});

const Signup = mongoose.model('Signup', signupSchema);
export default Signup;
