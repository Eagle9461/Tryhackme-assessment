import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://user1:password111@cluster0.9ecofvk.mongodb.net/';

    if (!mongoURI) {
      console.error('MongoDB URI not found in environment variables');
      return;
    }

    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connectDB;