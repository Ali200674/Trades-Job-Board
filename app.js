// Import the express module
import express from "express";

// Create an instance of an express application
const app = express();

// Define a port number for our server to listen on
const PORT = 3004;

// Enable static file serving
app.use(express.static("public"));

// set view engine to ejs
app.set("view engine", "ejs");

// Add "middleware" to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({ extended: true }));

// Define a default route ("/")
app.get("/", (req, res) => {
  res.render("home");
});

// Start the server on the designated port
app.listen(PORT, () => {
  console.log(`Server is running at 
        http://localhost:${PORT}`);
});
