const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
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
      transactions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
      }]
    });

export const User = mongoose.models.User || mongoose.model('User', userSchema)