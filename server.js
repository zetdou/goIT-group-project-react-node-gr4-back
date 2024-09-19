//uruchamianie serwera

require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
