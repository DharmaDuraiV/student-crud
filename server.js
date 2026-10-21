const app = require("./app");
const connectDB = require("./config/db");

connectDB();

app.listen(8000, "localhost", (err) => {
  if (err) throw err;
  console.log(`server is running ... http://localhost:8000`);
});
