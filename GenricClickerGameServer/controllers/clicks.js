const Player = require('../models/Player');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const createPlayer = asyncWrapper(async (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  const player = await Player.create({
    clicks: 0,
    coins: 0,
  });
  res.status(201).json(player);
});

const getClicks = asyncWrapper(async (req, res, next) => {
  const { id: playerID } = req.params;
  let player = await Player.findOne({ _id: playerID });

  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).json({ player });
});

const addClick = asyncWrapper(async (req, res, next) => {
  // Get a player and the clicks he has.
  const { id: playerID } = req.params;
  let player = await Player.findOne({ _id: playerID });
  let oldAmountOfClicks = player.clicks;
  let oldAmountOfCoins = player.coins;

  let newAmountOfCC = {
    clicks: oldAmountOfClicks + 1,
    coins: oldAmountOfCoins + 1,
  };

  player = await Player.findOneAndUpdate({ _id: playerID }, newAmountOfCC, {
    new: true,
    runValidators: true,
  });
  if (!player) {
    return next(createCustomError('There was an error'));
  }
  console.log(player);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).json({ player });
});

const removeCoins = asyncWrapper(async (req, res, next) => {
  // Get a player obj.
  const { id: playerID } = req.params;
  let player = await Player.findOne({ _id: playerID });

  //  Get the amount of coins to be removed

  // Check if the amount of coins can be removed.

  // if there is not enough cons do nothing return player

  //if there is enough coins callculate the new amount,
  // set the new amount

  //return the updated player obj.
});

module.exports = {
  addClick,
  getClicks,
  createPlayer,
};
