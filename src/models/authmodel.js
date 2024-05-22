import mongoose from "mongoose";


const logInSchema = mongoose.Schema({
    userName: {
        unique: true,
        type: string
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('Auth', signUpScema);
export default Login;