const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
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
      username: {
        type: String
       
      },
      msg: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  pictures: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model("event", EventSchema);
