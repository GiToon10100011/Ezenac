import { ApolloServer, gql } from "apollo-server";

//Mockup Data
let tweets = [
  {
    id: "1",
    text: "염동훈 97세",
    userId: "1",
  },
  {
    id: "2",
    text: "염동훈 바보",
    userId: "2",
  },
  {
    id: "3",
    text: "염동훈 멍청이",
    userId: "3",
  },
];

let users = [
  {
    id: "1",
    firstName: "염",
    lastName: "동훈",
  },
  {
    id: "2",
    firstName: "안",
    lastName: "성재",
  },
  {
    id: "3",
    firstName: "백",
    lastName: "종원",
  },
];

const typeDefs = gql`
  type Query {
    allTweets: [Tweet!]!
    allUsers: [Credentials!]!
    allMovies: [Movie!]!
    tweet(id: ID!): Tweet
    ping: String
    movie(id: String!): Movie
  }
  """
  Credentials Object Represents a resource for user credentials
  """
  type Credentials {
    id: ID!
    pw: ID
    """
    Is the sum of firstName + lastName as a String
    """
    userName: String!
    firstName: String!
    lastName: String!
  }
  """
  Tweet Object Represents a resource for a Tweet(post)
  """
  type Tweet {
    id: ID!
    text: String!
    user: Credentials
  }
  type Mutation {
    postTweet(text: String, userId: ID): Tweet!
    """
    Delete a Tweet if found, else returns false
    """
    deleteTweet(id: ID): Boolean!
  }
  type Movie {
    id: Int!

    url: String!

    imdb_code: String!

    title: String

    title_english: String

    title_long: String

    slug: String!

    year: String!

    rating: Float!

    runtime: Int!

    genres: [String!]!

    summary: String

    description_full: String!

    synopsis: String

    yt_trailer_code: String!

    language: String!

    mpa_rating: String!

    background_image: String!

    background_image_original: String!

    small_cover_image: String!

    medium_cover_image: String!

    large_cover_image: String!
  }
`;

//삭제됐다는걸 인지 시키기 위해 불린타입을 반환하는건가? 정확함

const resolvers = {
  Query: {
    // tweet() {
    //   console.log("hello");
    //   return null;
    // },
    // ping() {
    //   return "pong";
    // },
    //여기 함수들은 왜 root를 생략한거? 타입 정의할때  매개변수를 주지 않았다면 생략해야됨, 매개변수를 정의했다면 그를 사용하기 위해 root를 정의해야한다.
    allTweets() {
      return tweets;
    },
    allUsers() {
      console.log("userName");
      return users;
    },
    //이러면 root.find를 해도되는거 아님? ㄴㄴ 하나씩 값을 빼오는 거니까 그러면 안됨
    tweet(root, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    allMovies() {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((response) => response.json())
        .then((json) => json.data.movies);
    },
    movie(root, { id }) {
      return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then(({ data }) => data.movie);
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text,
      };
      tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet(root, { id }) {
      const tweet = tweets.find((tweet) => tweet.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  },
  //이건 왜 블록 범위가 상관없이 그냥 따로 동적으로 값을 주고 싶을때 주는거여? 값이 존재하지 않을때 일종의 디폴트값을 주고 싶을때 쓰는건가? 맞음
  //Dynamic Field 생성 (각 항목을 함수로 끌어올 수 있게 됨. )
  Credentials: {
    // username({firstName, lastName}) {
    //   //root가 왜 통째로 반환하는게 아니라 하나씩 반환하는거지? 구조분해할당을 해도되지 이러면..
    //   //반복문인건가..? 약간 그런식으로 생각해도됨. root는 값을 하나하나씩 다 빼와서 반환한다.
    //   // console.log(root)
    //   //무조건 allUsers를 거치고 username을 검사하게 됨.
    //   console.log("users called")

    //   return `${firstName} ${lastName}`;
    // },
    firstName({ firstName }) {
      return firstName;
    },
    lastName({ lastName }) {
      return lastName;
    },
    userName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    user({ userId }) {
      const result = users.find((user) => user.id === userId);

      if (!result) {
        console.log("해당 자료가 존재하지 않습니다.");
        return null;
      }
      return result;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running On ${url}`);
});
