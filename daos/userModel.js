import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    first_name: { type:String },
    last_name: { type:String },    
    email: { type:String }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);