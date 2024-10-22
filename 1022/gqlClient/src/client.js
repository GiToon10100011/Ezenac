import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

//Apollo Server를 통해서 Data를 전달받을 서버 주소: http://localhost:4000/

//cache값을 관리하기 위한 인스턴스 객체
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        allMovies {
          title
          id
        }
        movie(id: "64560"){
          title_long
        }
      }
    `,
  })
  .then((data) => console.log(data));

export default client;
