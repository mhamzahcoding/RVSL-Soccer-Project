const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  players: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  wins: {
      type: Number,
      default: 0
  },
  ties: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model('teams', TeamSchema);
