// Desc: Entry point of the application
import { connectDB } from "./db/index";
import "dotenv/config";
import { app } from "./app";

connectDB()
  .then(() => {
    app.listen(Number(process.env.PORT), () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
