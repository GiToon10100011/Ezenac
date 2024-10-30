import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Outlet, useLocation, useParams, useMatch } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchPriceInfo } from "../api";
import { Helmet } from "react-helmet";

interface IRouterParams {
  coinId: string;
}

interface ILocationState {
  state: {
    id: string;
    name: string;
  };
}

export interface ICoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface IPriceData {
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

const Tabs = styled.div`
  width: 480px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background: ${({ theme, isActive }) =>
    isActive ? theme.textColor : theme.accentColor};
  color: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.textColor};
  padding: 8px 0;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.textColor};
    color: ${({ theme }) => theme.accentColor};
  }
`;

//부모요소한테 전달받은 자료는 부모요소를 거치고나서야만 데이터가 전달되므로 api데이터를 가져와서 사용하는 이중 장치를 걸어서 데이터누락을 방지함.

const Coin = () => {
  // const [coin, setCoin] = useState<ICoinData>();
  // const [coinPrice, setCoinPrice] = useState<IPriceData>();
  // const [loading, setLoading] = useState(true);
  const { state } = useLocation() as ILocationState;
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  // useEffect(() => {
  //   (async () => {
  //     const coinInfo = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${state?.id}`
  //       )
  //     ).json();

  //     const priceInfo = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${state?.id}`
  //       )
  //     ).json();
  //     setCoin(coinInfo);
  //     setCoinPrice(priceInfo);
  //     setLoading(false);
  //   })();
  // }, []);

  //fetchCoins는 특정한 이벤트가 발발한후에 뭐 데이터를 가져오는게 아니라 시작하자마자 실행되면 되므로, 굳이 콜백으로 보내줄 필요가 없음. 허나, 각 코인에 대한 데이터는 사용자가 코인 목록중 코인을 클릭하면 해당 코인에 맞는 값을 가져와야하므로 콜백으로 큐스택에 넣어줘야 대기열에 들어가도록 해야함.

  const { isLoading: infoLoading, data: infoData } = useQuery<ICoinData>({
    queryKey: ["coinInfo", state?.id],
    queryFn: () => fetchCoinInfo(state?.id),
  });
  const { isLoading: priceLoading, data: priceData } = useQuery<IPriceData>({
    queryKey: ["coinPrice", state?.id],
    queryFn: () => fetchPriceInfo(state?.id),
    refetchInterval: 5000,
  });
  // const {} = useQuery<IPriceData>({
  //   queryKey: ["coinPrice"],
  //   queryFn: fetchPriceInfo(state?.id),
  // });

  const [searchParams, setSearchParams] = useSearchParams();

  const coinIdParams = searchParams.get("id");

  return (
    <Container>
      <Helmet>
        <title>{state?.name}</title>
      </Helmet>
      <Header>
        <Title>
          {state?.name
            ? state?.name
            : infoLoading
            ? "Loading..."
            : infoData?.name}
        </Title>
      </Header>
      {infoLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank: </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol: </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source: </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            <b>Information of {infoData?.type} : </b>
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
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply: </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart?${searchParams.toString()}`}>
                Chart
              </Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}?${searchParams.toString()}/price`}>
                Price
              </Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet context={{ infoData, priceData }} />
    </Container>
  );
};

export default Coin;
