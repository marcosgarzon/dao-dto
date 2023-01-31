import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USUARIO}:${process.env.MONGO_PASSWORD}@cluster0.tmathxe.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;


export default () => {
  mongoose.connect(uri)
  .then( () => console.log(`DB: ${process.env.MONGO_DB} lista para usar`))
  .catch( err => console.log(err))
} 