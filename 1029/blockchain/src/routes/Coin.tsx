import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface IRouterParams {
  coinId: string;
}

interface ILocationState {
  state: {
    id: string;
    name: string;
  };
}

interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: string;
  beta_value: string;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Header = styled.header`
  font-size: 32px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  margin-bottom: 20px;
`;
const Loader = styled.span`
  color: ${({ theme }) => theme.accentColor};
`;
const Overview = styled.div`
  width: 480px;
  color: ${({ theme }) => theme.bgColor};
`;
const OverviewItem = styled.div`
  background: ${({ theme }) => theme.textColor};
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 20px;
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.accentColor};
  }
`;
const Description = styled.div`
  background: ${({ theme }) => theme.accentColor};
  width: 480px;
  border-radius: 8px;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const Coin = () => {
  const [coin, setCoin] = useState<ICoinData>();
  const [coinPrice, setCoinPrice] = useState<IPriceData>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as ILocationState;
  const { coinId } = useParams();

  useEffect(() => {
    (async () => {
      const coinInfo = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${state.id}`
        )
      ).json();

      const priceInfo = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${state.id}`
        )
      ).json();
      setCoin(coinInfo);
      setCoinPrice(priceInfo);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          {state.name ? state.name : loading ? "Loading..." : coin?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank: </span>
              <span>{coin?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{coin?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{coin?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{coin?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{coin?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <b>Information of {coin?.type} : </b>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos
            nisi fugiat explicabo facilis earum non cum obcaecati totam numquam
            aspernatur aliquid doloribus dolorum incidunt, consequuntur, nobis
            harum odit! Cum. Dolorum consequatur ad corrupti id et voluptatem
            voluptates eligendi voluptas, laborum, ipsum quisquam dolore
            assumenda. Sit accusantium rem facilis tempora error, accusamus et
            ipsam aliquam ex a eius ratione facere? Neque nihil cumque id
            numquam, velit alias sunt optio a voluptatum sed, debitis possimus
            voluptates deserunt nulla in officia commodi ut at odio adipisci?
            Cumque deserunt deleniti voluptatibus dolorum assumenda. Voluptas
            voluptatibus, maxime at quas nesciunt illo velit. Ab voluptate aut
            eius quasi dolorum inventore ratione mollitia! Tenetur modi
            accusantium molestias id eius ad sapiente, maiores repudiandae
            aliquid? Quod, rem! Minus non voluptatem incidunt explicabo. Nam
            eveniet sapiente totam impedit eligendi ad aspernatur dolores
            reprehenderit exercitationem itaque qui nihil doloribus reiciendis
            unde quod vel neque sit esse quis, consectetur temporibus.
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{coinPrice?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply: </span>
              <span>{coinPrice?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
};

export default Coin;
