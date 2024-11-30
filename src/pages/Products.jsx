import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { CiSearch } from "react-icons/ci";

export default function Products() {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });

    return result || [];
  };

  const searchResult = searchProducts();

  return (
    <div className="container-x">
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />
      {products === null ? "Loading...." : null}
      {/* <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" /> */}

      <div className="flex flex-wrap justify-center gap-4">
        {searchResult.length === 0 ? "product not found" : ""}

        {searchResult?.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
