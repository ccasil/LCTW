const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventfulSchema = new Schema({
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
  // comments: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: 'users'
       
  //     },
  //     msg: {
  //       type: String
  //     },
  //     date: {
  //       type: Date,
  //       default: Date.now
  //     }
  //   }
  // ],
  pictures: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Eventful = mongoose.model("eventful", EventfulSchema);
