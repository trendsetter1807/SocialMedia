const app = require("./app");
const port=3000;
const { connectDatabase } = require("./config/database");
// const cloudinary = require("cloudinary");
connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
