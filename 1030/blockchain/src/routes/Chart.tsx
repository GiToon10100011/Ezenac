import React from "react";
import { useParams, useOutletContext, useSearchParams } from "react-router-dom";
import { ICoinData, IPriceData } from "./Coin";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

interface ICoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Container = styled.div``;

const Chart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const coinId = searchParams.get("id");

  console.log(coinId);

  const { infoData, priceData } = useOutletContext<{
    infoData: ICoinData;
    priceData: IPriceData;
  }>();

  const { isLoading, data } = useQuery<ICoinHistory[]>({
    queryKey: ["coinHistory", coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  console.log(data);

  //값이 들어오지 않았을때의 타입정의도 필요함.

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ReactApexChart
          width={480}
          type="line"
          series={[
            {
              name: "Price",
              type: "line",
              data: data?.map((price) => Number(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "transparent",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            colors: ["orange"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["purple"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => String(value.toFixed(3)),
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
