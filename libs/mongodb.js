import mongoose from 'mongoose';

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL);
    console.log('connected to mongodb');
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
