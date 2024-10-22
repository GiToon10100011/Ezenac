import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd732a);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 14px;
`;

const Subtitle = styled.h4`
  font-size: 24px;
  margin: 15px 0 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Description = styled.p`
  line-height: 24px;
  padding: 40px;
  text-align: center;
`;

const Image = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
    url(${({ bg }) => bg}) center/cover no-repeat;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Loading = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: center;
`;

const Movie = () => {
  const { id } = useParams();

  const GET_MOVIE = gql`
    query getMovie($movieId: String!) {
      movie(id: $movieId) {
        id
        title
        rating
        large_cover_image
        isLiked @client
      }
    }
  `;

  const {
    data,
    loading,
    client: { cache },
  } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  const handleOnLike = () => {
    cache.writeFragment({
      id: `Movie:${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          isLiked
        }
      `,
      data: {
        isLiked: !data.movie.isLiked,
      },
    });
  };

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>⭐ {data.movie.rating}</Subtitle>
          <Button
            style={{
              background: data.movie.isLiked ? "crimson" : "dodgerblue",
              color: "white",
            }}
            onClick={handleOnLike}
          >
            {data.movie.isLiked ? "Unlike 👎" : "Like 👍"}
          </Button>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            cum culpa quia in rem nobis mollitia sed. Fugit ad perspiciatis
            debitis expedita reiciendis. Consectetur nobis nihil nostrum
            tenetur, illo ipsa. Saepe quis praesentium eius adipisci sit aliquid
            possimus, quia quaerat magni consectetur enim. Fugiat culpa alias
            delectus quisquam. Deleniti qui minus reprehenderit perferendis quia
            commodi a, quo nemo maiores! Cum? Facere, nulla, omnis minus
            accusantium sit labore molestiae alias, quae rerum ex error animi
            dolores non voluptatem ad possimus incidunt. Consectetur temporibus
            corporis dolores beatae porro. Atque facere eum impedit.
          </Description>
        </Column>
      </ItemGroup>
      <Image bg={data.movie.large_cover_image} />
    </Container>
  );
};

export default Movie;
