import mongoose from "mongoose";

const connectDB = async () => {
  const uri = `${process.env.MONGODB_URI}/docslot`;
  console.log("Connecting to:", uri);

  mongoose.connection.on("connected", () =>
    console.log("✅ Database Connected")
  );

  mongoose.connection.on("error", (err) =>
    console.error("❌ Database Connection Error:", err)
  );

  await mongoose.connect(uri);
};

export default connectDB;
