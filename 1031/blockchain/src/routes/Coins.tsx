import React, { useEffect, useState } from "react";
import { createSearchParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { isDarkmodeAtom } from "../atoms";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CoinList = styled.ul`
  width: 480px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 14px;
  display: flex;
  cursor: pointer;
  a {
    color: inherit;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 14px;
    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 35px;
  object-fit: cover;
`;

const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
  font-size: 22px;
`;

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "sol-solana",
//     name: "Solana",
//     symbol: "SOL",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  //     );
  //     const json = await response.json();
  //     setCoins(json.slice(0, 1000));
  //     setLoading(false);
  //   })();
  // }, []);

  const { isLoading, data } = useQuery<ICoin[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  const setterFn = useSetRecoilState(isDarkmodeAtom);

  console.log(isLoading, data);

  return (
    <Container>
      <Helmet>
        <title>Coin List</title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Button onClick={() => setterFn((current) => !current)}>Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 1000).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.symbol}?${createSearchParams({
                  id: coin.id,
                })}`}
                state={{ name: coin.name, id: coin.id }}
              >
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.symbol}
                />
                {coin.rank}. {coin.name}({coin.symbol}) &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;