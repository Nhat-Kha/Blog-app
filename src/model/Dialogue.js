const mongoose = require("mongoose");

const DialogueSchema = new mongoose.Schema(
  {
    from: {
      type: Types.ObjectId,
      ref: "UserAuth",
    },
    to: {
      type: Types.ObjectId,
      ref: "UserAuth",
    },
    lastMessage: {
      type: Types.ObjectId,
      ref: "Comment",
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dialogue", DialogueSchema);
