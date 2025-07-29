import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const PORT = process.env.DB_PORT;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}...`);
});
