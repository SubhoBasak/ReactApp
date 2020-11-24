import React from "react";

// components
import Display from "../../components/Display";
import Filter from "../../components/Filter";

// layout
import Grid from "../../layouts/Grid";
import List from "../../layouts/List";

// TODO - use API
// import test data
import products from "./test_data.json";

const Market = () => {
  const [view, setView] = React.useState(0);

  let product_gallery = <Grid products={products} />;
  if (view === 1) {
    product_gallery = <List products={products} />;
  }

  return (
    <>
      <Display layout_0={() => setView(0)} layout_1={() => setView(1)} />
      {product_gallery}
    </>
  );
};

export default Market;
