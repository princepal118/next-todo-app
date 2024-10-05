import mongoose from "mongoose";

export const ConnectDB = async () => {
  console.log("Db before call...");

  await mongoose.connect(
   'mongodb+srv://princepalsingh118:AAx39hUyg2V06hiv@cluster0.kfzdv.mongodb.net/todo-app'
  );
  console.log("Db Connected...");
};



