export const fetchCoins = async () => {
  return await fetch(
    "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  ).then((response) => response.json());
};

export const fetchCoinInfo = async (coinId: string | undefined) => {
  return await fetch(
    `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  ).then((response) => response.json());
};

export const fetchPriceInfo = async (coinId: string | undefined) => {
  return await fetch(
    `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  ).then((response) => response.json());
};

export const fetchCoinHistory = async (coinId: string | undefined | null) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  return await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}&start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
};
