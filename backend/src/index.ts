import app from "./server/app";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.on("error", (error: Error) => {
  console.error(error.message, error);
});