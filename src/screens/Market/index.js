import React from "react";
import {product_list} from "../../API/api";

// components
import Banner from "../../components/Banner";

// layout
import CardGrid from "../../layouts/CardGrid";

// TODO - use API
// import test data
// import products from "./test_data.json";

const Market = () => {
    const [products, setProducts] = React.useState([])
    React.useEffect(() => {
        product_list(setProducts)
    }, [])

  return (
    <>
      <Banner />
      <div className="d-flex w-100 justify-content-center my-5">
        <h1>Market</h1>
      </div>
      <CardGrid products={products} />
    </>
  );
};

export default Market;
