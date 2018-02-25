const mongoose = require('mongoose');
const Schema = require('mongoose.Schema')

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

module.exports = mongoose.model('user', UserSchema);

// var expenseSchema = new Schema({   example to follow
//     description: String,
//     amount: Number,
//     month: String,
//     year: Number
//   });
//   module.exports = mongoose.model('Expense', expenseSchema);