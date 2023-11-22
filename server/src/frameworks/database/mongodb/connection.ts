import mongoose from 'mongoose';
import configKeys from "../../../../config";
mongoose.set("strictQuery", true);  //can help catch errors and ensure data integrity

const connectDB = async () => {
  try {
    await mongoose.connect(configKeys.DB_CLUSTER_URL, {
      dbName: configKeys.DB_NAME,
    });
    console.log('Database connected successfully');
  } catch (error: any) {
    console.log("Error occured in mongo connection:",error);
    process.exit(1);
  }
};

export default connectDB;

