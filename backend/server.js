const express = require("express");
const cors = require("cors");
const QuerySchema = require("./utils/Request");
const app = express();
app.use(express.json());
app.use(cors());
require("./utils/mongoose.js");

app.get("/", (request, response) => {
  console.log("Home route reached");
});

app.post("/query", async(request, response) => {
  try {
    console.log("POST request found");
    const formData = await request.body;
    console.log(request.body);
    const newQuery = await QuerySchema.create({
      name: formData.Name,
      email: formData.email,
      message: formData.Message,
    });

    response.json({
      message: "Query was recorded",
      status: 200,
      query: newQuery,
    });
  } catch (error) {
    console.log(error.message);
    response.json({
      message: "Some error at backend",
      status: 500,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running at 3000");
});
