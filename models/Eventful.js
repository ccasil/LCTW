const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventfulSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String
  },
  title: {
    type: String,
    required: true,
    min: 3,
    max: 40
  },
  description: {
    type: String
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  pictures: [
    { name: { type: String }, 
    id: { type: String },
    picture: {data: Buffer} }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Eventful = mongoose.model("eventful", EventfulSchema);
