const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }


    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0)
                throw new Error('Age must be positive')
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error('password cannot contain "password')
        },
        trim: true

    },
    tokens: [{
        token: {
            type:String,
            required: true
        }
    }]
},{
    timestamps: true
})

userSchema.virtual('tasks',{
    ref: 'Task',
    localField:'_id',
    foreignField:'owner'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObj = user.toObject()

    delete userObj.password
    delete userObj.tokens

    return userObj
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user)
    {       
        throw new Error('Unable to login')
    }
        
    const isMatch = await bcrypt.compare(password, user.password)
        
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user;
}


userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'randomstringsignature')

    user.tokens = user.tokens.concat({token})
    await user.save();

    return token
}

//hash the plain text password before saving
userSchema.pre('save',async function(next) {
    const user = this;

    if(user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password,8)
    }
    next()//save the user
})

//Delete user task when user is removed
userSchema.pre('remove',async function(next){
    const user = this;

    await Task.deleteMany({owner:user._id})

    next()
})

const User = mongoose.model('User',userSchema )

module.exports = User;