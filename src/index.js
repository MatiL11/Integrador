const app = require("./app");
const { Server } = require("socket.io");

const { port } = require("./config/app.config");

const httpServer = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});
