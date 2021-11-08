const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  clicks: {
    type: Number,
    require: [true, 'A player must have clicks'],
  },
  coins: {
    type: Number,
    require: [true, 'A player must have a coin'],
  },
});

module.exports = mongoose.model('Player', PlayerSchema);
