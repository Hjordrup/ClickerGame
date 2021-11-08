const URL = 'http://localhost:3000/api/v1/';
const button = document
  .getElementById('coinBtn')
  .addEventListener('click', clicked);

let playerID = '6186e759e7d7da9dab22d211';

const clickCount = document.getElementById('clicksValue');
const coinCount = document.getElementById('coinsValue');

async function clicked() {
  let response = await fetch(`${URL}click/${playerID}`);
  let responseJson = await response.json();
  let click = responseJson.player.clicks;
  let coin = responseJson.player.coins;
  clickCount.innerHTML = click;
  coinCount.innerHTML = coin;
}

async function getClicks() {
  let response = await fetch(`${URL}antalClick/${playerID}`);
  let responseJson = await response.json();
  let click = responseJson.player.clicks;
  let coin = responseJson.player.coins;
  clickCount.innerHTML = click;
  coinCount.innerHTML = coin;
}

async function createPlayer() {
  let response = await fetch(`${URL}addPlayer`, {
    method: 'POST',
    body: JSON.stringify({
      clicks: 0,
      coins: 0,
    }),
  });
  let jsonResponse = await response.json();
  playerID = jsonResponse._id;
}

getClicks();

// '6186e759e7d7da9dab22d211';
