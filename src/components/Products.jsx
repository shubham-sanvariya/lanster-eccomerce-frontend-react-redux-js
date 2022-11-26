import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { popularProducts } from "../data";
import Product from "./Product";

 

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap; // for arranging the images in group of four
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // this means when ever category changes run this function
  useEffect(() => {
    console.log({ category });

    (async () => {
      try {
        const productURL = category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products";
        const res = await axios.get(productURL);
        setProducts(() => res.data);
        console.log(products, res.data);
      } catch (err) {
        console.log(err);
      }
    })()
  }, [category]); // category is a dependency 

  useEffect(() => {

    if (category) {
      setFilteredProducts(
        products.filter(
          (item) => {
            return Object.entries(filters)
              .every(([key, value]) => {
                console.log({ rohit: (item[key]) });

                return (item[key]).includes(value);
              }
              )
          }
        )
      );
    }
    else {
      setFilteredProducts(products)
    }
  }, [products, category, filters]);

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
        );
    } else if(sort === "asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.price - b.price)
        );
    } else  {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
  },[sort])

  return (
    <Container>
      {filteredProducts.map((item,index) => {
        
        return (
          <Product item={item} key={index} />
        )
      })}
    </Container>
  )

}

export default Products