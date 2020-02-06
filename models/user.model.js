const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    saltSecret: String
});

/*-----------------Password Encryption During Registration----------------------*/
userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }

                user.password = hash;
                user.saltSecret = salt;
                next();
            });
        });
    } else {
        return next();
    }
});

/*-----------------Matching Encripted Password With Database During Login---------------*/
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

/*---------------JWT Generation-----------------------------------*/
userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

var User = mongoose.model('User', userSchema);

module.exports = User;
