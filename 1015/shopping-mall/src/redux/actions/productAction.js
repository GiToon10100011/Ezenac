const getProduct = (searchQuery) => {
  // let url = `https://my-json-server.typicode.com/GiToon10100011/MusinsaMallJSONServer/products?q=${searchQuery}`;
  // const response = await fetch(url);
  // const data = await response.json();
  // return data;

  //dispatch를 사용하면 해당 인자값으로 준 값안에서 return을 함수의 형태로 사용할때, 해당 함수의 매개변수는 dispatch함수를 받아올 수 있다. 해당 파일은 일단 js파일이고 컴포넌트가 아니기때문에 훅을 못사용함으로 인해 ProductAll에서 중첩으로 dispatch를 써준것이다. ProductAll에서 getProduct함수를 호출하면서 이 안에 있는 dispatch가 촉발되면서 reducer로 비로소 dispatch로 정의한 값이 보내진다. 
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/GiToon10100011/MusinsaMallJSONServer/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
};

//함수에서 반환되는 값을 객체의 형태로 넣어야하므로 중괄호로 감싸줘서 export해야함.
export const productAction = { getProduct };
