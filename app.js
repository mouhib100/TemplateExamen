var createError = require("http-errors");
var express = require("express");
const http = require("http");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./config/connectDb"); //connect to the database
const cors = require("cors"); // import the cors package

const indexRouter = require("./routes/index.router"); //the routes of all the project

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS
app.use(cors());

// pour dire que n'importe quel fichier se trouve dans le dossier public, je peux le renvoyer sur le serveur
app.use(express.static("public"));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

const server = http.createServer(app);
const io = require("socket.io")(server);

var name;

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("joining msg", (username) => {
    name = username;
    io.emit("chat message", `---${name} joined the chat---`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("chat message", `---${name} left the chat---`);
  });
  socket.on("chat message", (msg) => {
    socket.broadcast.emit("chat message", msg); //sending message to all except the sender
  });
});
server.listen(5000, () => {
  console.log("app is running on port 5000");
});
