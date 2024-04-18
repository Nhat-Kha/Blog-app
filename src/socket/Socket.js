const { Socket } = require("socket.io");
const { Server } = require(Socket);

const Dialogue = require("../model/Dialogue");

const { verifyAccessTokenIO } = require("../utils/verifyUser");

const socket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  const joinedList = [];

  io.on("Connect", (socket) => {
    socket.on("join", async (data) => {
      let jwtData = null;

      console.log("data:", data.payload);
      if (data.payload && data.payload.token) {
        jwtData = verifyAccessTokenIO(data.payload.token);
      }
      console.log("jwtData:", jwtData);
      socket.join(data.room);
      if (/dialogues:/.test(data.room)) {
        if (!jwtData || jwtData._id !== data.room.replace("dialogues:", "")) {
          socket.emit("error", createError.Unauthorized());
          socket.leave(data.room);
          return;
        }
      }
    });
  });
};
