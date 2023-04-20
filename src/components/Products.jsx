import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");
      // const response = await fetch("http://localhost:4000/api/v1/products");
      const response = await fetch("http://104.197.243.96:4000/api/v1/products");

      if (componentMounted) {
        let test = (await response.json()).products;
        test = test.map((data) => data._source)
        setData(test);
        setFilter(test);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  function handleSearch(e) {
    
    let updatedList = filter || [];
    if (e.target.value && e.target.value.length >= 3) {
      setTimeout(() => {
        const category = data.filter((x) => String(x.category).toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase())>=0);
      const title = data.filter((x) => String(x.title).toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase())>=0);
      const description = data.filter((x) => String(x.description).toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase())>=0);
      updatedList = new Set([...category,...title,...description]);
      setFilter([...updatedList]);
      }, 1000);
      
    }
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">

          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All </button>

          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men </button>

          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")} > Women </button>

          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")} > Jewelery </button>

          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}> Electronincs </button>

          <input type="text" placeholder="Search" onChange={(e) => handleSearch(e)}> </input>
        </div>
        {filter && filter.map((productDetails) => {
          const product = productDetails;
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} height="250px" className="card-img-top" alt={product.title} />

                  <div className="card-body">
                    <h5 className="card-title mb-0"> {product.title?.substring(0, 12)}... </h5>
                    <p className="card-text lead fw-bold">₹{product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn  btn-outline-dark" > See Details </NavLink>
                  </div>

                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}
