import React from "react";
import { all_shops } from "../../API/api";

// components
import Banner from "../../components/Banner";

// layout
import Shop from "../../layouts/Shop";

const Market = () => {
    const [load, setLoad] = React.useState(false)
    const [shops, setShop] = React.useState([])

    React.useEffect(() => {
        all_shops(setShop, setLoad)
    }, [])

    function set_shops(){
        if(load){
            return shops.map((data, index) => <Shop key={index} data={data} />)
        }
    }

  return (
    <>
      <Banner />
      <div className="d-flex w-100 justify-content-center my-5">
        <h1>Market</h1>
      </div>
        {set_shops()}
    </>
  );
}

export default Market;
