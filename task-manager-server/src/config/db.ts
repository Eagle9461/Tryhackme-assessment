import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb+srv://web_dev:kyXo82h1gwzJkPcU@db-task.ykdbksa.mongodb.net/';

    await mongoose.connect(mongoURI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

export default connectDB;