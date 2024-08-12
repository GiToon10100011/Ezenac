const productInfo = "./products.json";

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCnt = Date.now();
    const products = {
      data: data.data.map((item) => ({
        // 이번 전개연산자는 원본데이터를 그대로 가져와주게끔함
        ...item,
        id: idCnt++,
      })),
    };

    // Removing Items
    const removeItem = (product) => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // Making Items
    const createItem = (product) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      // 순서주의
      h3.className = "name";
      h3.innerText = product.name;
      span.className = "price";
      span.innerText = price;
      attr.value = product.img;
      img.setAttributeNode(attr);
      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);
    };

    // Importing Items
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // Button Events
    const newListing = document.querySelector(".newlisting");

    const sortNew = (e) => {
      e.preventDefault();
      // 정렬된 배열을 담을 변수
      removeItem();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newListing.addEventListener("click", sortNew);

    const asceBtn = document.querySelector(".ascending");

    const sortAsce = (e) => {
      e.preventDefault();
      removeItem();
      // 정렬된 배열을 담을 변수
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });
      myProducts.forEach((product) => {
        createItem(product);
      });
    };
    asceBtn.addEventListener("click", sortAsce);

    const descBtn = document.querySelector(".descending");

    const sortDesc = (e) => {
      e.preventDefault();
      removeItem();
      // 정렬된 배열을 담을 변수
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descBtn.addEventListener("click", sortDesc);

    //Search
    const searchBar = document.querySelector(".searchBar");
    searchBar.addEventListener("input", () => {
      const keyword = searchBar.value.toLowerCase();

      if (keyword === "") {
        removeItem();
        importData();
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
        });

        removeItem();

        filtered.forEach((product) => {
          createItem(product);
        });
      };
    });
    
    // Select Event
    const select = document.querySelector("select");

    const selectCategory = (e) => {
      const optionIndex = e.target.options.selectedIndex;
      const value = e.target.options[optionIndex].value;
      console.log(value);
      const filtered = products.data.filter((product) => {
        return product.category.includes(value);
      });

      removeItem();
      
      filtered.forEach((product) => {
        createItem(product);
      }); 
    }

    select.addEventListener("change", selectCategory)

  })
  .catch((error) => {
    console.log(error);
  });
