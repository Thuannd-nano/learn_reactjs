import React, { Fragment, useEffect, useState } from "react";
import Axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://fakestoreapi.com/products"
    );
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray md:w-1/2 mx-auto ">
      {products.map((product) => (
        <div className="bg-white flex mb-5 w-full rounded-lg shadow-sm"> 
          <Fragment key={product.id}>
            <div style={{ backgroundImage: `url(${product.image})` }} className="w-5/12 bg-contain bg-no-repeat bg-center "></div>
            <a href={`${product.id}`}>
            <div className="w-7/12">
              <h1 className="md:text-2xl">{product.title.substr(0, 50)}</h1>
              <h3 className="text-gray-400 ">{product.category}</h3>
              <p className="text-red-400 mt-4 text-xl md:text-4xl">{product.price}$</p>
              <div className="mt-4">{product.description.substr(0, 100)}</div>
            </div>
         </a>
          </Fragment>
        </div>


      ))}
    </div>
  );

};

export default Products;