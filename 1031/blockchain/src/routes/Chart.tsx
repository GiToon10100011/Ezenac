import React from "react";
import { useParams, useOutletContext, useSearchParams } from "react-router-dom";
import { ICoinData, IPriceData } from "./Coin";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkmodeAtom } from "../atoms";

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
    refetchInterval: 5000,
  });

  //고추장 그만 담그기 위한 일종의 필터 장치
  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  const isDarkmode = useRecoilValue(isDarkmodeAtom);

  //값이 들어오지 않았을때의 타입정의도 필요함.

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : chartData.length > 0 ? (
        <ReactApexChart
          width={480}
          type="line"
          series={[
            {
              name: "Price",
              type: "line",
              data: chartData?.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDarkmode ? "dark" : "light",
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
              categories: chartData.map((price) =>
                new Date(price.time_close * 1000).toLocaleDateString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
                formatter: (value) => value.toFixed(3),
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
          }}
        />
      ) : (
        "No Data available.. Please Wait"
      )}
    </div>
  );
};

export default Chart;
