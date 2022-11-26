import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/products";
import { mobile } from "../responsive";


const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
  ${mobile({ width: "0px 20px",
             display: "flex",
             flexDirection:"column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 28px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
  
`;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ 
      ...filters,
      [e.target.name]: value,
      
    });
  };

  return (
    <Container>
         <Navbar />
         <Announcement />
         <Title>{category}</Title>
          <FilterContainer> {/*this is product filter */}
            <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select name="color" onChange={handleFilters} >
                <Option disabled>
                  Color
                </Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select name="size" onChange={handleFilters}>
                <Option  disabled>
                  Size 
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
              </Filter>
            <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select onChange={(e) => setSort(e.target.value)}>
                <Option value={"newest"}>Newest</Option>
                <Option value={"asc"}>Price (asc)</Option>
                <Option value={"desc"}>Price (desc)</Option>
                <Option></Option>
              </Select>
              </Filter>
         </FilterContainer>
         <Products category={category} filters={filters} sort={sort} />
         <Newsletter/>
         <Footer />
    </Container>
  )
}

export default ProductList