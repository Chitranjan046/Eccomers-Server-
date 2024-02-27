// import mongoose from "mongoose";
// export const connectDB = (uri: string) => {
//     mongoose.connect(process.env.MONGO_URI);
//       .then((c) => console.log(`DB Connected to ${c.connection.host}`))
//       .catch((e) => console.log(e));
//   };


import mongoose from "mongoose";

// export const connectDB = (uri: string) => {
//     mongoose.connect(uri, {
       
//     })
//     .then(() => {
//         console.log(`DB Connected to ${mongoose.connection.host}`);
//     })
//     .catch((error) => {
//         console.error("MongoDB connection error:", error);
//     });
// };


export const connectDB = (uri: string) => {
    mongoose
      .connect(uri)
      .then((c) => console.log(`DB Connected to ${c.connection.host}`))
      .catch((e) => console.log(e));
  };